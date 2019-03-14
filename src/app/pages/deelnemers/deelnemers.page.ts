import { Component, OnInit } from '@angular/core';
import { FirebaseFirestore } from '@angular/fire';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-deelnemers',
  templateUrl: './deelnemers.page.html',
  styleUrls: ['./deelnemers.page.scss'],
})
export class DeelnemersPage implements OnInit {

  constructor(private store: FirebaseService) { }

  ngOnInit() {
    console.log(this.store.participants$);
  }

}
