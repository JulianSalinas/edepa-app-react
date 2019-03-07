// const firebase = require("firebase/app");
// const config = require('../json/fireconfig');
//
// require("firebase/auth");
// require("firebase/database");
// firebase.initializeApp(config);

export default class FirebaseDatabase {

    static READ = "read";
    static UPDATE = "update";
    static DELETE = "delete";

    constructor(){
        this.database = require('../json/Database');
    }

    synchCongress(receive){
        receive(this.database.edepa5.congress);
    }

    synchEvents(receive){
        const events = this.database.edepa5.schedule;
        Object.keys(events).map(key => {
            receive(key, events[key], FirebaseDatabase.READ);
        });
    }

    synchPeople(receive){
        const people = this.database.edepa5.people;
        Object.keys(people).map(key => {
            receive(key, people[key], FirebaseDatabase.READ);
        });
    }

    /**
     * Must be called when exit from the app
     */
    closeConnection(){
        console.log('Connection closed.')
    }

}