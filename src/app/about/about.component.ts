import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(screen.height);
    const a = screen.height.toString();
    document.getElementById('first-image-background').style.height = a + 'px';
  }

}
