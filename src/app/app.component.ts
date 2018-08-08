import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTitle: string;
  title = 'money-saver';
  btnEnable = true;

  constructor() {
    setTimeout(() => {
      this.btnEnable = false;
    }, 1000);
  }

  getGreeting(): string {
    return 'Hello, wellcome to';
  }

  clickHandler() {
    this.title = this.newTitle;
  }

  changeHandler(e) {
    this.newTitle = e.target.value;
  }
}
