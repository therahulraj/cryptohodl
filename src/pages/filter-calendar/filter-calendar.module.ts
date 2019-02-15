import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterCalendarPage } from './filter-calendar';

@NgModule({
  declarations: [
    FilterCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterCalendarPage),
  ],
})
export class FilterCalendarPageModule {}
