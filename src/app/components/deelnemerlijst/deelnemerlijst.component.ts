import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-deelnemerlijst',
  templateUrl: './deelnemerlijst.component.html',
  styleUrls: ['./deelnemerlijst.component.scss'],
})
export class DeelnemerlijstComponent implements OnInit {

  constructor(private store: FirebaseService) { }

  ngOnInit() {}

}
