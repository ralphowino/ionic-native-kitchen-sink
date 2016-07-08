import {Component} from '@angular/core';
import {Platform, Storage, SqlStorage} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/sqlite/sqlite.html'
})

export class Sql {
    private storage:any;
    private people:any[];
    private firstname:string;
    private secondname:string;

    constructor(private platform:Platform) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(
            ()=> {
                this.storage = new Storage(SqlStorage);
                this.storage.query('CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)')
                    .then((data)=> {
                        },
                        (error)=> {
                        });
            })
    }

    add() {
        this.platform.ready().then(
            ()=> {
                this.storage = new Storage(SqlStorage);
                this.storage.query("INSERT INTO people (firstname, lastname) VALUES (?,?);", (this.firstname, this.secondname))
                    .then((data)=> {
                        },
                        (error)=> {
                        });
            }).then(
            ()=> {
                this.select();
            })
    }

    select() {
        this.platform.ready().then(() => {
            this.storage.query("SELECT * FROM people").then((data) => {
                if (data.res.rows.length > 0) {
                    for (var i = 0; i < data.res.rows.length; i++) {
                        this.people.push({
                            firstname: data.res.rows.item(i).firstname,
                            lastname: data.res.rows.item(i).lastname
                        });
                    }
                }
            }, (error) => {
            });
        });
    }

    delete(){

    }
}