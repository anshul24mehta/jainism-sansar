import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aarti',
  templateUrl: 'aarti.html',
})
export class AartiPage {

  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Aarti ' + i,
        note: 'This is Aarti #' + i
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AartiPage');
  }

}
