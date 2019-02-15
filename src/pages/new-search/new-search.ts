import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { FilterCalendarPage } from '../filter-calendar/filter-calendar';

/**
 * Generated class for the NewSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-search',
  templateUrl: 'new-search.html',
})
export class NewSearchPage {

  constructor(private modalCtrl: ModalController) {
  }
  filterResultsPresent() {
    const modal = this.modalCtrl.create(FilterCalendarPage);
    modal.present();
  }
  chooseFieldsPresent() {
    const modal = this.modalCtrl.create(FilterPage);
    modal.present();
  }

}
