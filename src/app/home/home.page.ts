import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private afAuth: FirebaseService) { }

  signOut() {
    console.log('signout firebase');
    this.afAuth.signOut();
  }
}
