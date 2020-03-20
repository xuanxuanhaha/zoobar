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
    window.onscroll = () => {
      const st = window.pageYOffset;
      let dir = '';
      if (st > this.lastScrollTop) {
        dir = 'down';
        console.log('down');
        // 向上拉，如果到了第一张图的一半，就自己上去
        if(window.scrollY > screen.height / 2 && window.scrollY < screen.height - 100){
          document.getElementById('fixed-top').style.display = 'none';
          document.getElementById('fixed-top2').style.display = 'inline';
          console.log(window.scrollY);
          window.scroll({
            top: screen.height,
            left: 0,
            behavior: 'auto'
          });
        } else if(window.scrollY > screen.height - 100){

        } else{
          document.getElementById('fixed-top').style.display = 'inline';
          document.getElementById('fixed-top2').style.display = 'none';

        }

      } else {
        dir = 'up';
        console.log('up');
        if(window.scrollY > screen.height / 2){
          document.getElementById('fixed-top').style.display = 'none';
          document.getElementById('fixed-top2').style.display = 'inline';
        }else{
          document.getElementById('fixed-top').style.display = 'inline';
          document.getElementById('fixed-top2').style.display = 'none';
          console.log(window.scrollY);
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'auto'
          });

        }
      }
      this.lastScrollTop = st;
      lc.run(() => {
        this.direction = dir;
      });


    };
  }


  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(screen.height);
    const a = screen.height.toString();
    document.getElementById('first-image-background').style.height = a + 'px';
    document.getElementById('second-image-background').style.height = a + 'px';

  }

}
