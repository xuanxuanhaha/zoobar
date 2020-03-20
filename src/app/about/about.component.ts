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
      console.log(window.scrollY);
      const st = window.pageYOffset;
      let dir = '';
      if (st > this.lastScrollTop) {
        dir = 'down';
        console.log('down');
        // 向上拉，如果到了第一张图的一半，就自己上去

        if(window.scrollY < screen.height / 2){
          document.getElementById('fixed-top').style.display = 'inline';
          document.getElementById('fixed-top2').style.display = 'none';
          document.getElementById('fixed-top3').style.display = 'none';
          document.getElementById('fixed-top4').style.display = 'none';
          document.getElementById('fixed-top5').style.display = 'none';
        }
        if(window.scrollY > screen.height / 2 && window.scrollY < screen.height + 40){
          document.getElementById('fixed-top').style.display = 'none';
          document.getElementById('fixed-top2').style.display = 'inline';
          document.getElementById('fixed-top3').style.display = 'inline';
          document.getElementById('fixed-top4').style.display = 'inline';
          document.getElementById('fixed-top5').style.display = 'inline';
          console.log(window.scrollY);
          window.scroll({
            top: screen.height + 45,
            left: 0,
            behavior: 'auto'
          });
          console.log('> 2');
        }
        if(window.scrollY > screen.height + 300){
          document.getElementById('fixed-top').style.display = 'none';
          document.getElementById('fixed-top2').style.display = 'none';
          document.getElementById('fixed-top3').style.display = 'none';
          document.getElementById('fixed-top4').style.display = 'none';
          document.getElementById('fixed-top5').style.display = 'none';
        }


      } else {
        dir = 'up';
        console.log('up');
        if(window.scrollY > screen.height / 2){
          document.getElementById('fixed-top').style.display = 'none';
          document.getElementById('fixed-top2').style.display = 'inline';
          document.getElementById('fixed-top3').style.display = 'inline';
          document.getElementById('fixed-top4').style.display = 'inline';
          document.getElementById('fixed-top5').style.display = 'inline';
        }else{
          document.getElementById('fixed-top').style.display = 'inline';
          document.getElementById('fixed-top2').style.display = 'none';
          document.getElementById('fixed-top3').style.display = 'none';
          document.getElementById('fixed-top4').style.display = 'none';
          document.getElementById('fixed-top5').style.display = 'none';
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
