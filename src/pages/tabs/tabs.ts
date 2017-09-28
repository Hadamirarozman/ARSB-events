import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CalendarPage } from '../calendar/calendar';


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = CalendarPage;

  constructor() {
  }

}
