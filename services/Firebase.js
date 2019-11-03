import firebase from 'firebase/app';


export default class Firebase {

    static READ = 'read';
    static UPDATE = 'update';
    static DELETE = 'delete';

    static INTERVAL = 0;

    constructor() {
        this.database = firebase.database().ref('edepa6');
    }

    createEvent(event) {
        this.database.child('schedule').push().set(event)
            .then(() => console.log('Event created!'))
            .catch(() => console.log('Error creating event!'));
    }

    synchEvents(receive) {
        const reference = this.database.child('schedule');
        const callback = action => this.createSynchCallback(action, receive);
        reference.on('child_added', callback(Firebase.READ));
        reference.on('child_changed', callback(Firebase.UPDATE));
        reference.on('child_removed', callback(Firebase.DELETE));
    }

    updateEvent(key, event) {
        this.database.child('schedule').child(key).set(event)
            .then(() => console.log('Event updated!'))
            .catch(() => console.log('Error updating event!'));
    }

    deleteEvent(key) {
        this.database.child('schedule').child(key).remove()
            .then(() => console.log('Event deleted!'))
            .catch(() => console.log('Error deleting event!'));
    }

    synchPeople(receive) {
        const reference = this.database.child('people');
        const callback = action => this.createSynchCallback(action, receive);
        reference.orderByChild('completeName').on('child_added', callback(Firebase.READ));
        reference.on('child_changed', callback(Firebase.UPDATE));
        reference.on('child_removed', callback(Firebase.DELETE));
    }

    synchHome(receive) {
        const reference = this.database.child('congress');
        reference.once('value', snapshot => receive(snapshot.val()));
    }

    /**
     * @param {string} action, it could be READ, UPDATE, DELETE
     * @param {function} receive, function from the app to receive the data back
     * @returns {function({ key, val }): * }
     */
    createSynchCallback(action, receive) {
        return snapshot => receive(snapshot.key, snapshot.val(), action);
    }

    /**
     * Must be called when exit from the app
     */
    closeConnection() {
        this.database.child('people').off();
        this.database.child('schedule').off();
    }

}