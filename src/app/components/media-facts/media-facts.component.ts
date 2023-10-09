import { Component, OnInit } from '@angular/core';
import { MEDIAFACTS } from 'src/app/helpers/media-facts';

@Component({
  selector: 'app-media-facts',
  templateUrl: './media-facts.component.html',
  styleUrls: ['./media-facts.component.css']
})
export class MediaFactsComponent implements OnInit {
  mediaFacts = MEDIAFACTS;
  selected = '2020';
  selectedIndex = 0;
  translatePos = 0;
  translateDist: number = 410;

  constructor() { }

  ngOnInit(): void {
    this.changeSize();
  }

  changeSize() {
    if (window.innerWidth <= 768) {
      this.translateDist = 410;
    }
  }

  selectYear(item: any, index:any) {
    this.selected = item.year;
    // this.selectedIndex = index;
    this.translatePos = -(index * this.translateDist);
  }

}
