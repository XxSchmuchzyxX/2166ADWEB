// home.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcomeMessage: string = 'Welcome to My Awesome Website';
  description: string = 'The Power of Angular in the Palm of my Hand.';
  showImage: boolean = false;

  // Add any other properties or methods as needed

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
