import {Component} from "@angular/core";
import {ActionSheet} from 'ionic-native'

@Component({
    templateUrl: 'build/pages/actionsheetplugin/actionsheet-plugin.html'
})

export class ActionSheetPlugin {
    constructor() {

    }

    showSheet() {
        let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
        ActionSheet.show({
            'title': 'What do you want with this image?',
            'buttonLabels': buttonLabels,
            'addCancelButtonWithLabel': 'Cancel',
            'addDestructiveButtonWithLabel': 'Delete'
        }).then(buttonIndex=> {
            console.log('You clicked:' + buttonLabels[buttonIndex - 1])
        })
    }
}