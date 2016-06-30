import {Component} from "@angular/core";
import {NavController,Popover as Pop} from 'ionic-angular';

@Component({
    template:`
    <ion-content>
        <ion-list>
            <ion-list-header>
                Magical Schools
             </ion-list-header>
            <ion-item>Hogwarts</ion-item>
            <ion-item>Durmstrang</ion-item>
            <ion-item>Beauxbatons</ion-item>
        </ion-list>
    </ion-content>
    `
})

class MyPopover{

}

@Component({
    templateUrl:'build/pages/popover/popover.html'
})

export class Popover{
    constructor(private nav:NavController){
        
    }
    
    showPopover(){
        let popover = Pop.create(MyPopover);
        this.nav.present(popover);
    }
}