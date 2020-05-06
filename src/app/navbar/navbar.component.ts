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
    console.log(window.location.href);
    const locationhref = window.location.href;
    const locationhrefarray = locationhref.split('/');
    console.log(locationhrefarray);
    let ishustler = false;
    for (let i = 0; i < locationhrefarray.length; i++){
      if(locationhrefarray[i] === 'hustler'){
        console.log('yes');
        ishustler = true;
      }
    }
    if(ishustler === true){
      document.getElementById('showlogo').style.display = 'none';
      document.getElementById('showhustler').style.right = '100px';
    }else{
      document.getElementById('showhustler').style.display = 'none';

    }


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
