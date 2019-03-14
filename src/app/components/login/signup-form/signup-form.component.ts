import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {

  inschrijfFormulier: FormGroup;

  constructor(private fb: FormBuilder, private store: FirebaseService) {
    this.inschrijfFormulier = this.fb.group({
      evenement: new FormControl('', Validators.compose([
        Validators.required
      ])),
      onderdeel: new FormControl('', Validators.compose([
        Validators.required
      ])),
      voornaam: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tussenvoegsel: new FormControl('', Validators.compose([
        Validators.required
      ])),
      achternaam: new FormControl('', Validators.compose([
        Validators.required
      ])),
      geslacht: new FormControl('', Validators.compose([
        Validators.required
      ])),
      postcode: new FormControl('', Validators.compose([
        Validators.required
      ])),
      land: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adres: new FormControl('', Validators.compose([
        Validators.required
      ])),
      woonplaats: new FormControl('', Validators.compose([
        Validators.required
      ])),
      geboortedatum: new FormControl('', Validators.compose([
        Validators.required
      ])),
      telefoonnummer: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nieuwsbrief: new FormControl('', Validators.compose([
        Validators.required
      ])),
      voorwaarden: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
   }

  ngOnInit() {}

  inschrijven() {
    alert('U bent ingeschreven, #1234');
  }

  sendForm() {
    console.log('sendform');
    this.store.addNewParticipant();

  }
}

export interface InschrijfFormulier {
  firstName: '';
  middleName: '';
  lastName: '';
  streetName: '';
  houseNumber: '';
  zipCode: '';
  city: '';
  country: '';
  dateOfBirth: Date;
  gender: '';
  phoneNumber: '';
  email: '';
  avg: Boolean;
  newsLetter: Boolean;
}
