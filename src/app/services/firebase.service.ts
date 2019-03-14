import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user';
import { NewUser } from '../models/new-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  participantCollectionRef: AngularFirestoreCollection<NewUser>;
  participants$: Observable<NewUser[]>;

  testObject: NewUser = {
    evenement: 'Zuid',
    onderdeel: '70km - Blauwe Route',
    voornaam: 'Jan',
    tussenvoegsel: '',
    achternaam: 'Raas',
    adres: 'Raasweg 4',
    postcode: '6363AC',
    woonplaats: 'Somewhere',
    land: 'Nederland',
    geboortedatum: '8 November 1952',
    geslacht: 'm',
    telefoonnummer: 612312332,
    email: 'jan.raas@amstelgold.nl',
    nieuwsbrief: true,
    voorwaarden: true
  };

  constructor(private store: AngularFirestore, private afAuth: AngularFireAuth) {
    this.participantCollectionRef = this.store.collection<NewUser>('participants');
    this.participants$ = this.participantCollectionRef.valueChanges();
  }

  signIn(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.userName, user.password)
      .then(response => {
        console.log('Success!', response);
        console.log(this.isAuthenticated());
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  signUp(email: string, pass: string) {
    //
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(value => {
        console.log('Success!', value);
        // to do: store additional user data
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  signOut() {
    this.afAuth.auth.signOut();

  }

  addNewParticipant() {
      this.participantCollectionRef.add(this.testObject);
  }

  isAuthenticated() {
    const user = this.afAuth.auth.currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
