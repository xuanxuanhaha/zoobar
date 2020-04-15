import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SendDataService } from '../send-data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pdfSrc: any = '';

  constructor(private router: Router, private sendData: SendDataService) { }

  ngOnInit() {
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
  goToPackage() {
    this.pdfSrc = 'https://zoobarandgrill.com.au/assets/functional_flyer.pdf';
    window.open(this.pdfSrc, '_blank');
  }
  goToWhatsOn() {

  }
  goToLunch() {

  }
  goToMenu() {
    this.router.navigateByUrl('/menu');
  }
}
