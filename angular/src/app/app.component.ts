import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = [];

    createNote(note) {
      console.log(note);
      this.notes.push(note);
    }

    deleteNote(note) {
      const idx = this.notes.indexOf(note);
      this.notes.splice(idx, 1);
    }
}
