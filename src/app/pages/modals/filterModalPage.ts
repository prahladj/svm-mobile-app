import { Component, Input } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';

@Component({
    selector: 'filterModalPage-page',
    templateUrl: './filterModalPage.html',
    styleUrls: ['./filterModalPage.scss'],
})

export class FilterModalPage {
    constructor(private nav: NavController, private modalCtrl: ModalController) { }

    dismissModal() {
        this.modalCtrl.dismiss();
    }
}