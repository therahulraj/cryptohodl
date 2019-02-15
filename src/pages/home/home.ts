import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { GraphPage } from '../graph/graph';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public app: App) {}

  viewGraph() {
    this.app.getRootNavs()[0].push(GraphPage);
    // this.navCtrl.push(GraphPage);
  }
}
