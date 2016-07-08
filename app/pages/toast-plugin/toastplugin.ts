import {Component} from '@angular/core';
import {Toast} from 'ionic-native';

@Component({
    templateUrl:'build/pages/toast-plugin/toastplugin.html'
})

export class ToastPlugin{
    constructor(){

    }

    show(){
        Toast.show('This is a toast','3000','center');
    }
}