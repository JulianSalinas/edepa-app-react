// constants firebase = require("firebase/app");
// constants config = require('../files/fireconfig');
//
// require("firebase/auth");
// require("firebase/database");
// firebase.initializeApp(config);

export default class Firebase {

    static READ = "read";
    static UPDATE = "update";
    static DELETE = "delete";

    constructor(){
        this.database = require('../files/Database');
    }

    synchCongress(receive){
        receive(this.database.edepa5.congress);
    }

    synchEvents(receive){
        const events = this.database.edepa5.schedule;
        Object.keys(events).map(key => {
            receive(key, events[key], Firebase.READ);
        });
    }

    synchPeople(receive){
        const people = this.database.edepa5.people;
        Object.keys(people).map(key => {
            receive(key, people[key], Firebase.READ);
        });
    }

    /**
     * Must be called when exit from the app
     */
    closeConnection(){
        console.log('Connection closed.')
    }

}