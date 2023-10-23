import { Component, Input, OnInit } from '@angular/core';
import { slideInterface } from 'src/interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']

})

export class CarouselComponent implements OnInit {
  
  @Input() images: slideInterface[] = []
  @Input() indicator = true;
  @Input() controls = true
  @Input() slideInterval = 3000
  @Input() autoSlide = false
  selectedIndex = 0;
  // slideConfig= {
  //   "slidesToShow": 4,
  //   "slidesToScroll": 4,
  //   "autoPlay":true,
  //   "autoplaySpeed": 5000,
  //   "pauseOnHover": true,
  //   "infinite": true,
  //   "responsive": [
  //       {
  //       "breakpoint": 992,
  //       "settings": {
  //         "arrows": true,
  //         "infinite": true,
  //         "slidesToShow": 3,
  //         "slidesToScroll": 3
  //         }
  //       },
  //       {
  //       "breakpoint": 992,
  //       "settings": {
  //         "arrows": true,
  //         "infinite": true,
  //         "slidesToShow": 1,
  //         "slidesToScroll":1
  //         }
  //       },
  //     ]
  // }
  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick()
    }, this.slideInterval)
  }
  
  selectImage(index : number):void {
    this.selectedIndex = index;
  }

  onPrevClick():void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1
    }
    else {
      this.selectedIndex--
    }
  }
  onNextClick():void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0
    }
    else {
      this.selectedIndex++
    }
  }
}
