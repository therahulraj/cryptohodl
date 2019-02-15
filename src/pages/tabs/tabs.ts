import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import {  }
import { HomePage } from '../home/home';
import { NewSearchPage } from '../new-search/new-search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewSearchPage;

  constructor() {
     
  }
}
