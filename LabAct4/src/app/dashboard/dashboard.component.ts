import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
showText: boolean = false;
toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Adrian', lastName: 'Tomas', email: 'adriantomas@tester.com', role: ' Mage' },   
    { firstName: 'Kodo', lastName: 'Tetsuhiro', email: 'ValoGods@tester.com', role: ' Marksman ' }, 
    { firstName: 'Sean', lastName: 'Anunciacion', email: 'Schumuchzy@tester.com', role: ' Jungler ' }, 
    { firstName: 'John Dave', lastName: 'De Hesus', email: 'Jdman@tester.com', role: ' Roam ' }, 
    { firstName: 'Lou', lastName: 'Salonga', email: 'Hyperocketman@tester.com', role: ' Side Laner ' } 
    ];


}
