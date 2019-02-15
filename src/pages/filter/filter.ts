import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  constructor(public viewCtrl: ViewController) {
  }

  dismissFilterModal() {
    this.viewCtrl.dismiss();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FilterPage');
  // }

}
