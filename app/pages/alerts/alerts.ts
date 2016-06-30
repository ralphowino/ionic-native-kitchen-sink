import {Component} from "@angular/core";
import {NavController, Alert} from 'ionic-angular';

@Component({
    templateUrl:'build/pages/alerts/alerts.html'
})

export class Alerts{

    static get parameters(){
        return [[NavController]]
    }

    constructor(private nav){

    }

    showBasic(){
        let alert = Alert.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });

        this.nav.present(alert);
    }

    showPrompt(){
        let prompt = Alert.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        this.nav.present(prompt);
    }

    showConfirm(){
        let confirm = Alert.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });

        this.nav.present(confirm);
    }

    showRadio(){
        let alert = Alert.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Amethyst',
            value: 'amethyst',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'red',
            value: 'red',
            checked: false
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                console.log(data);
            }
        });

        this.nav.present(alert);
    }
    
    showCheckbox(){
        let alert = Alert.create();
        alert.setTitle('Which planets have you visited?');

        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
            }
        });
        
        this.nav.present(alert);
    }
}