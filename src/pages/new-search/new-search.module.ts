import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSearchPage } from './new-search';

@NgModule({
  declarations: [
    NewSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSearchPage),
  ],
})
export class NewSearchPageModule {}
