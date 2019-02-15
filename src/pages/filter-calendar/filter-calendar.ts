import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-calendar',
  templateUrl: 'filter-calendar.html',
})
export class FilterCalendarPage {

  constructor(public viewCtrl: ViewController) {
  }

  dismissFilterCalendarModal() {
    this.viewCtrl.dismiss();
  }
}
