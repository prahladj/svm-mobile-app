import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BranchesOfMathaPage } from './branches-of-matha.page';

const routes: Routes = [
  {
    path: '',
    component: BranchesOfMathaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BranchesOfMathaPage]
})
export class BranchesOfMathaPageModule {}
