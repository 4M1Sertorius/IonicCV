import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CVPage } from './cv';

@NgModule({
  declarations: [
    CVPage,
  ],
  imports: [
    IonicPageModule.forChild(CVPage),
  ],
})
export class CvPageModule {}
