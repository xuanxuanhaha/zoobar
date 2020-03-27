import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lastScrollTop = 0;
  direction = '';

  constructor(lc: NgZone) {
  }


  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(screen.height);
    const b = screen.height;
    const a = screen.height.toString();
    document.getElementById('first-image-background').style.height = a + 'px';
    document.getElementById('second-image-background').style.height = a + 'px';


    document.getElementById('fixed-top4').style.marginTop = (Number(a) - 450) + 'px';

    document.getElementById('fixed-top5').style.marginTop = (Number(a) - 550) + 'px';



    if(window.scrollY < screen.height / 2){
      document.getElementById('fixed-top').style.display = 'inline';
      document.getElementById('fixed-top2').style.display = 'none';
      document.getElementById('fixed-top3').style.display = 'none';
      document.getElementById('fixed-top4').style.display = 'none';
      document.getElementById('fixed-top5').style.display = 'none';
    }
    if(window.scrollY > screen.height / 2 && window.scrollY < screen.height + 40) {
      document.getElementById('fixed-top').style.display = 'none';
      document.getElementById('fixed-top2').style.display = 'inline';
      document.getElementById('fixed-top3').style.display = 'inline';
      document.getElementById('fixed-top4').style.display = 'inline';
      document.getElementById('fixed-top5').style.display = 'inline';
    }
    if(window.scrollY > screen.height + 300){
      document.getElementById('fixed-top').style.display = 'none';
      document.getElementById('fixed-top2').style.display = 'none';
      document.getElementById('fixed-top3').style.display = 'none';
      document.getElementById('fixed-top4').style.display = 'none';
      document.getElementById('fixed-top5').style.display = 'none';
    }
  }

}
