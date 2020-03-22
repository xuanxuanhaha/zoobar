import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // document.getElementById('about').style.color = 'white';
    // document.getElementById('zoobargrill').style.color = 'white';
    // document.getElementById('hustler').style.color = 'white';
    // document.getElementById('corporate').style.color = 'white';
    // document.getElementById('nightclub').style.color = 'white';
    // document.getElementById('functionevent').style.color = 'white';
    // document.getElementById('contact').style.color = 'white';
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  goToNightClub() {
    this.router.navigateByUrl('/nightclub');
  }
  goToZooBar(){
    this.router.navigateByUrl('/overview');
  }
  goToHustler(){
    this.router.navigateByUrl('/hustler');
  }
  goToAbout(){
    this.router.navigateByUrl('/about');
  }
  goToCorporate(){
    this.router.navigateByUrl('/corporate');
  }
  goToFunction() {
    this.router.navigateByUrl('/function-event');
  }

  goToDrink(){
    this.router.navigateByUrl('/drink');
  }
  goToPackage(){

  }
  goToWhatsOn(){

  }
  goToLunch(){

  }
}
