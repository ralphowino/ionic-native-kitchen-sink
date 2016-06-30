import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {Native} from '../native/native';
import {Cordova} from '../cordova/cordova';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  nav:any;
  constructor(private navController: NavController) {
    this.nav = navController;
  }

  cordovaPlugins(){
    this.nav.push(Cordova);
  }
  
  feedback(){
    
  }

  goToIntroduction(){

  }

  nativeComponents(){
    this.nav.push(Native);
  }
}
