import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-parshvnathPage',
  templateUrl: 'parshvnath.html'
})
export class ParshvnathPage {
  
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Shri Parhv prabhu ' + i,
        note: 'This is item #' + i
      });
    }
  }
}
