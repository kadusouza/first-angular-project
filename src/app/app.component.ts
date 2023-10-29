import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: pink
  }
  `]
})
export class AppComponent {
  displayDetails = false;
  detailsContent = "this content is detailed";
  clicksArrayLog: number[] = [];

  onClickButton() {
    this.clicksArrayLog.push(this.clicksArrayLog.length + 1);
    if(this.displayDetails == false) {
      this.displayDetails = true;
    } else {
      this.displayDetails = false;
    }
  }

  getBackgroundColor(index: number) {
    if(index >= 5) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
