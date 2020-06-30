import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-version',
  templateUrl: './form-version.component.html',
  styleUrls: ['./form-version.component.css']
})
export class FormVersionComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit(): void {

  }

}
