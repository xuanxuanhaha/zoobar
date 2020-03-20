import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoobargrill',
  templateUrl: './zoobargrill.component.html',
  styleUrls: ['./zoobargrill.component.css']
})
export class ZoobargrillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(screen.height);
    const b = screen.height;
    const a = screen.height.toString();
    document.getElementById('first-image-background').style.height = a + 'px';
    document.getElementById('second-image-background').style.height = a + 'px';
    document.getElementById('third-image-background').style.height = a + 'px';
    document.getElementById('greenbox').style.height = Number(a) / 2 + 'px';
    document.getElementById('greenbox').style.width = '35%';
    document.getElementById('third-image-background1').style.marginTop = a + 'px';
  }

}
