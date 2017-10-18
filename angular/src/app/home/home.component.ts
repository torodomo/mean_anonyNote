import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  note = {
    text: ''
  };

  notes = [];

  constructor(
    private _noteServive: NoteService,
    private _http: Http) {
      this.show();
     }

  ngOnInit() {
  }

  create() {
    this._http.post('/notes', this.note)
    .subscribe(
      (response) => {
        console.log('Succeessful response from the server');
        this.show();
        console.log(this.notes);
      },
      (err) => {
        console.log(err);
      }
    );
    this.note.text = '';
  }

  show() {
    this._http.get('/notes')
    .subscribe(
      (notes) => {
        console.log('Succeessful response from the server');
        this.notes = notes.json();
        console.log(this.notes);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
