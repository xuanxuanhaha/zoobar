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
  }

}
