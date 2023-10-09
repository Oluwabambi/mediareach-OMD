import { Component, OnInit } from '@angular/core';
import { LATESTNEWS } from 'src/app/helpers/latest-news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  latestNews: any = LATESTNEWS;
  selected: string = 'Latest Awards';
  translatePos: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectNews(item:any, index:any) {
    this.selected = item.title;
    this.translatePos = -(index * 395);
  }

}
