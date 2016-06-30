import {Component} from "@angular/core";
import {NavController,Toast} from 'ionic-angular';

@Component({
    templateUrl:'build/pages/toast/toast.html'
})

export class Toaster{
    constructor(private nav:NavController){

    }

    topPosition(){
        let toast = Toast.create({
            message:'Execute Order 66',
            duration:2000,
            position:'top'
        });

        toast.onDismiss(()=>{
            console.log('Dismissed');
        });

        this.nav.present(toast);
    }

    middlePosition(){
        let toast = Toast.create({
            message:'Execute Order 66',
            duration:2000,
            position:'middle'
        });

        this.nav.present(toast);
    }

    bottomPosition(){
        let toast = Toast.create({
            message:'take me to the temple you shall',
            duration:2000,
            position:'bottom'
        });

        this.nav.present(toast);
    }

    closeToast(){
        let toast = Toast.create({
            message:'Will you join the Sith?',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });

        this.nav.present(toast);
    }
}