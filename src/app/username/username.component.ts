import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  username = '';
  isEmpty = true;

  resetUsername() {
    if(this.username != '') {
      this.username = '';
    }
  }
}
