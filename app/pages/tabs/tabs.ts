import {Component} from "@angular/core";

@Component({
    template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>Tab 1</ion-content>`
})
class Tab1 {}

@Component({
    template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>Tab 2</ion-content>`
})
class Tab2 {}

@Component({
    templateUrl:'build/pages/tabs/tabs.html'
})

export class Tabs{
    private tab1:any;
    private tab2:any;
    constructor(){
        this.tab1 = Tab1;
        this.tab2 = Tab2;
    }
}