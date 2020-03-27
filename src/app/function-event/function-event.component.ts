import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-function-event',
  templateUrl: './function-event.component.html',
  styleUrls: ['./function-event.component.css']
})

export class FunctionEventComponent implements OnInit {

  imagePath: any = '';
  images: any = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor() { }


  ngOnInit(): void {
    this.imagePath = 'assets/function_event/';
    this.images = [this.imagePath + '/IMG_7024.jpg',
                   this.imagePath + '/IMG_7033.jpg',
                   this.imagePath + '/IMG_6751.jpg',
                   this.imagePath + '/IMG_6753.jpg'];
  }

  goToContact() {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
