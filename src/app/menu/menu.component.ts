import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.scrollTo(0, 0);
    const elmnt = document.getElementById('menumain');
    const txt = 'Height with padding and border: ' + elmnt.offsetHeight + 'px';
    console.log(txt);
    // document.getElementById('menusame').style.height = document.getElementById('menumain').offsetHeight + 'pv';
  }

}
