import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string): void {
    this.enteredText = value;
  }

  compare(generatedLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }

    return generatedLetter === enteredLetter
      ? 'correct'
      : 'incorrect';
  }
}
