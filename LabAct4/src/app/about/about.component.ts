import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // String Interpolation

  Position = "The Choosen One"
  work_experience = "999"
  email = 'facebook@gamail.com'
  website = 'wwww.facebook.com'
  phone = '11694164619461'

  //image Interpolation/Binding

  imageUrl:string='assets/geto.jpg';
  imageW:number=100;
  imageH:number=100; 

}
