import { Component, OnInit } from '@angular/core';
import { GALLERY } from 'src/app/helpers/gallery';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  galleryItems = GALLERY;
  currentLocation: any = 'NIGERIA';
  currentPicIndex: number = 0;
  prevLocations: any = [];
  currentPicId: number = 1;
  translatePos: number = 0;
  translateDist: number = 570;

  constructor() { }

  ngOnInit(): void {
    this.formatNums()
    window.addEventListener('resize', ()=> {
      if (window.innerWidth <= 768) {
        this.translateDist = 100;
        this.translatePos = -(this.currentPicIndex * this.translateDist); 
      } else if (window.innerWidth > 768 && window.innerWidth <= 996) {
        this.translateDist = 468;
        this.translatePos = -(this.currentPicIndex * this.translateDist);
        return;
      } else {
        this.translateDist = 570;
        this.translatePos = -(this.currentPicIndex * this.translateDist);
      }
    })
    this.changeTranslateDist();
  }

  changeTranslateDist() {
    if (window.innerWidth <= 768) {
      this.translateDist = 100;
      this.translatePos = -(this.currentPicIndex * this.translateDist);
    } else if (window.innerWidth > 768 && window.innerWidth <= 996) {
      this.translateDist = 468;
    } else {
      this.translateDist = 570;
    }
  }

  viewGallery(title: any, ind:any) {
    console.log(title);
    this.currentPicId = 1;
    
    if (title === this.currentLocation) {
      return;
    }
    console.log('before removing current: ', this.prevLocations);
    const currentIndex = this.prevLocations.indexOf(title)
    if (this.prevLocations.includes(title)) { this.prevLocations.splice(currentIndex, 1) }
    this.prevLocations.push(this.currentLocation);
    console.log('after removing current: ', this.prevLocations);
    
    // else if (title === 'NIGERIA') {
    //   this.currentLocation = 'GHANA'
    // } else if (title === '')

    this.currentLocation = title;
    console.log('current: ', this.currentLocation);
    
  }

  formatNums() {
    this.galleryItems.forEach((item) => {
      let itemNums: any = []
      let count: any = '1';
      item.items.forEach(() => {
        if (Math.floor(count / 10) === 0) {
          count = '0' + count
        }
        itemNums.push(count)
        count++;
      })
      item.itemNums = itemNums 
    })
  }

  scrollPics(data: any, index: any) {
    console.log(this.translateDist);
    this.currentPicId = data;
    this.currentPicIndex = index;
    this.translatePos = -(index * this.translateDist) 
  }

}
