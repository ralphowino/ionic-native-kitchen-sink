import {Component} from "@angular/core";
import {Modal, NavController, ViewController} from 'ionic-angular';

@Component({
    template: `
    <ion-content padding>
        <h2>Hi, I am a modal</h2>
        <button (click)="close()">Close Me</button>
    </ion-content>`
})

class MyModal {
    constructor(private viewCtrl:ViewController) {

    }

    close() {
        this.viewCtrl.dismiss();
    }
}

@Component({
    templateUrl: 'build/pages/modals/modals.html'
})

export class Modals {
    constructor(private nav:NavController) {

    }

    showModal() {
        let modal = Modal.create(MyModal);
        this.nav.present(modal);
    }
}