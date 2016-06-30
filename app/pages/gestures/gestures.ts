import {Component} from "@angular/core";

@Component({
    templateUrl:'build/pages/gestures/gestures.html'
})

export class Gestures{
    private taps:number = 0;
    private presses:number = 0;
    private pans:number = 0;
    private swipes:number = 0;
    private pinches:number = 0;
    
    constructor(){

    }

    tapEvent(event:any){
        this.taps += event.tapCount;
    }

    pressEvent(event:any){
        this.presses ++
    }

    panEvent(event:any){
        this.pans ++;
    }

    swipeEvent(event:any){
        this.swipes ++;
    }

    pinchEvent(event:any){
        this.pinches ++;
    }
}