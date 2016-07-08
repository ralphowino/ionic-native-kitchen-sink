import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {ActionSheetPlugin} from '../actionsheetplugin/actionsheet-plugin';
import {AppAvailabilityPlugin} from '../app-availability/app-availability';
import {Barcode} from '../barcode/barcode';
import {CameraPlugin} from '../camera/camera';
import {DatePlugin} from '../datepicker/datepicker';
import {Email} from '../email/email';
import {Flash} from '../flashlight/flashlight';
import {Geo} from '../geolocation/geolocation';
import {Image} from '../image-picker/imagepicker';
import {Browser} from '../inappbrowser/inappbrowser';
import {Local} from '../local-notifications/localnotifications';
import {Media} from '../media/media';
import {Screen} from '../screenshot/screenshot';
import {SmsPlugin} from '../sms/sms';
import {Social} from '../social-sharing/socialsharing';
import {Spinner} from '../spinner-dialog/spinnerdialog';
import {Splash} from '../splashscreen/splashscreen';
import {Status} from '../statusbar/statusbar';
import {ToastPlugin} from '../toast-plugin/toastplugin';
import {VibrationPlugin} from '../vibration/vibration';

interface cordova {
    name:string;
    page:any;
    tags:string[];
}

@Component({
    templateUrl: 'build/pages/cordova/cordova.html'
})

export class Cordova {
    private nav:any;
    private plugins:any;
    private cordovaPlugins:cordova[] = [
        {
            name: 'Action Sheet',
            page: ActionSheetPlugin,
            tags: []
        },
        {
            name: 'App Availability',
            page: AppAvailabilityPlugin,
            tags: []
        },
        {
            name: 'Bar Code Scanner',
            page: Barcode,
            tags: []
        },
        {
            name: 'Camera',
            page: CameraPlugin,
            tags: []
        },
        {
            name: 'Date Picker',
            page: DatePlugin,
            tags: []
        },
        {
            name: 'Email',
            page: Email,
            tags: []
        },
        {
            name: 'Flashlight',
            page: Flash,
            tags: []
        },
        {
            name: 'Geolocation',
            page: Geo,
            tags: []
        },
        {
            name: 'Google Maps',
            page: 'app.geo',
            tags: []
        },
        {
            name: 'Image Picker',
            page: Image,
            tags: []
        },
        {
            name: 'InAppBrowser',
            page: Browser,
            tags: []
        },
        {
            name: 'Local Notification',
            page: Local,
            tags: []
        },
        {
            name: 'Media Plugin',
            page: Media,
            tags: []
        },
        {
            name: 'Screenshot',
            page: Screen,
            tags: []
        },
        {
            name: 'SMS',
            page: SmsPlugin,
            tags: []
        },
        {
            name: 'Social Sharing',
            page: Social,
            tags: []
        },
        {
            name: 'Spinner Dialog',
            page: Spinner,
            tags: []
        },
        {
            name: 'Splashscreen',
            page: Splash,
            tags: []
        },
        {
            name: 'Sqlite',
            page: 'app.social',
            tags: []
        },
        {
            name: 'Status Bar',
            page: Status,
            tags: []
        },
        {
            name: 'Toast',
            page: ToastPlugin,
            tags: []
        },
        {
            name: 'Vibration',
            page: VibrationPlugin,
            tags: []
        }
    ];

    static get parameters() {
        return [[NavController]]
    }

    constructor(nav) {
        this.plugins = this.cordovaPlugins;
        this.nav = nav;
    }

    goToPage(page:any) {
        this.nav.push(page);
    }
}