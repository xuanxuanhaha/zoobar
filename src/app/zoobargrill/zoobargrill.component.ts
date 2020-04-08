import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-zoobargrill',
  templateUrl: './zoobargrill.component.html',
  styleUrls: ['./zoobargrill.component.css']
})
export class ZoobargrillComponent implements OnInit {

  globalListen: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // TODO: Animation effect
    window.scrollTo(0, 0);
    this.globalListen = this.renderer.listen('document', 'keydown', e => {
      if (e.key === 'ArrowDown') {
        this.scrollNext();
      }
      // console.log('a' + e.key);
    });
  }

  scrollNext() {
    document.getElementById('first_id').style.top = '1000px';

  }



}
