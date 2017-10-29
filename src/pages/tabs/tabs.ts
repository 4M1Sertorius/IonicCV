import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *Asko Mikkola 1600397
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
//tabs declaration
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  tab4Root: string;
  tab5Root: string;

//constructor for tabs
  constructor() {

    this.tab1Root = 'CVPage';
    this.tab2Root = 'ProjectWorkPage';
    this.tab3Root = 'ContactsPage';
    this.tab4Root = 'AboutPage';
    this.tab5Root = 'ExtraCurriculumPage';
  }

}
