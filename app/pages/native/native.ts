import {Component} from "@angular/core";
import {NavController, Icon} from 'ionic-angular';
import {Action} from '../actionsheet/action-sheet';
import {Alerts} from '../alerts/alerts';
import {Badges} from '../badges/badges';
import {Buttons} from '../buttons/buttons';
import {Cards} from '../cards/cards';
import {Datetime} from '../datetime/datetime';
import {Forms} from '../forms/forms';
import {Gestures} from '../gestures/gestures';
import {Grid} from '../grid/grid';
import {Icons} from '../icons/icons';
import {Lists} from '../lists/lists';
import {Loading} from '../loading/loading';
import {Modals} from '../modals/modals';
import {Popover} from '../popover/popover';
import {Segment} from '../segment/segment';
import {Slides} from '../slides/slides';
import {Tabs} from '../tabs/tabs';
import {Toaster} from '../toast/toast';
import {ToolBar} from '../toolbar/toolbar';


interface native {
    name:string;
    page:any;
    tags:string[];
}

@Component({
    templateUrl: 'build/pages/native/native.html'
})

export class Native {
    private nav:any;
    private native:any;
    private searchQuery:string;
    private nativeElements:native[] = [
        {
            name: 'Action Sheet',
            page: Action,
            tags: ['action sheet', 'action', 'sheet']
        },
        {
            name: 'Alerts',
            page: Alerts,
            tags: ['basic alerts', 'confirmation alerts', 'prompt alerts', 'radio alerts', 'checkbox alerts']
        },
        {
            name: 'Badges',
            page: Badges,
            tags: ['badges']
        },
        {
            name: 'Buttons',
            page: Buttons,
            tags: ['button', 'colors', 'clear', 'sizes', 'icon buttons', 'block', 'block buttons', 'outline',
                'button bar', 'full', 'full width button', 'round', 'round buttons', 'fab', 'floating action button']
        },
        {
            name: ' Cards',
            page: Cards,
            tags: ['card', 'card headers', 'card footers', 'list card', 'card images', 'card showcase']
        },
        {
            name: ' DateTime',
            page: Datetime,
            tags: ['date', 'time', 'datetime']
        },
        {
            name: 'Form Elements',
            page: Forms,
            tags: ['radio', 'checkbox', 'toggle', 'range', 'select', 'elements', 'text', 'password', 'email', 'tel', 'search', 'number', 'date', 'month']
        },
        {
            name: 'Gestures',
            page: Gestures,
            tags: ['tap', 'pan', 'press', 'pinch', 'swipe', 'rotate']
        },
        {
            name: 'Grid',
            page: Grid,
            tags: ['col', 'row', 'grid']
        },
        {
            name: 'Icons',
            page: Icons,
            tags: ['icons', 'variable icons', 'icon', 'active icons', 'inactive icons']
        },
        {
            name: 'Lists',
            page: Lists,
            tags: ['list', 'inset list', 'list header', 'thumbnail list', 'list buttons', 'avatar', 'multiline list', 'icon list',
                'list divider', 'sliding list']
        },
        {
            name: 'Loading',
            page: Loading,
            tags: ['loading']
        },
        {
            name: 'Modals',
            page: Modals,
            tags: ['modal', 'modals']
        },
        {
            name: 'Popover',
            page: Popover,
            tags: ['popover']
        },
        {
            name: 'Segment',
            page: Segment,
            tags: ['segment']
        },
        {
            name: 'Slides',
            page: Slides,
            tags: ['slides']
        },
        {
            name: 'Tabs',
            page: Tabs,
            tags: ['tabs', 'icon tabs', 'text tabs', 'badge tabs']
        },
        {
            name: 'Toast',
            page: Toaster,
            tags: ['toast']
        },
        {
            name: 'Toolbar',
            page: ToolBar,
            tags: ['toolbar', 'tool', 'bars', 'searchbar']
        }
    ];

    constructor(private navController:NavController) {
        this.nav = navController;
        this.searchQuery = '';
        this.initializeItems();
    }

    goToPage(page) {
        this.nav.push(page);
    }

    initializeItems() {
        this.native = this.nativeElements;
    }

    getItems(searchQuery:string){

        this.initializeItems();

        if (searchQuery.trim() == '') {
            return;
        }

        this.native = this.nativeElements.filter((v) => {
            let tags = v.tags;
            if (tags.indexOf(searchQuery.toLowerCase()) > -1) {
                return true;
            }
            return false;
        })
    }
}
