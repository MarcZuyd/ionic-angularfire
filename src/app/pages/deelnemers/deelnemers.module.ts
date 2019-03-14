import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DeelnemerlijstComponent } from '../../components/deelnemerlijst/deelnemerlijst.component';
import { DeelnemersPage } from './deelnemers.page';

const routes: Routes = [
  {
    path: '',
    component: DeelnemersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [DeelnemerlijstComponent],
  declarations: [DeelnemerlijstComponent, DeelnemersPage]
})
export class DeelnemersPageModule {}
