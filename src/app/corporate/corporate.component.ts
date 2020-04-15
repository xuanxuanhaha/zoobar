import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNewTab() {
    window.open('/assets/functional_flyer.pdf', 'popup', 'width=600,height=600');
  }

}
