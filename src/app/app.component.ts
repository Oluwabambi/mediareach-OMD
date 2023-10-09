import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { ACHIEVEMENTS } from './helpers/achievements';
import { CONTACTS } from './helpers/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('sect02') sect02: ElementRef | undefined;
  @ViewChild('sect04') sect04: ElementRef | undefined;
  @ViewChild('sect06') sect06: ElementRef | undefined;
  @ViewChild('sect10') sect10: ElementRef | undefined;
  @ViewChild('sect11') sect11: ElementRef | undefined;
  @ViewChild('sect12') sect12: ElementRef | undefined;
  @ViewChild('sect13') sect13: ElementRef | undefined;
  @ViewChild('sect14') sect14: ElementRef | undefined;
  @ViewChild('sect15') sect15: ElementRef | undefined;
  @ViewChild('sect17') sect17: ElementRef | undefined;

  selectedCountry: any;
  achievements = ACHIEVEMENTS;
  contacts = CONTACTS;
  scrollPos: any;
  countriesList = [
    { id: 1, countryName: 'Nigeria' },
    { id: 2, countryName: 'Ghana' },
    { id: 3, countryName: 'Cameroon' },
  ];

  constructor(private renderer: Renderer2) {}

  selectCountry(item: any) {
    this.selectedCountry = item;
  }
  ngOnInit(): void {
    this.selectedCountry = 'Nigeria';
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollElements = [
      {
        secName: 'HOME',
        viewName: this.sect02,
      },
      {
        secName: 'ABOUT',
        viewName: this.sect04,
      },
      {
        secName: 'CREDENTIALS',
        viewName: this.sect06,
      },
      {
        secName: 'LOCATIONS',
        viewName: this.sect11,
      },
      {
        secName: 'MEDIAFACTS',
        viewName: this.sect13,
      },
      {
        secName: 'NEWS',
        viewName: this.sect14,
      },
      {
        secName: 'CAREERS',
        viewName: this.sect15,
      },
      {
        secName: 'CONTACT',
        viewName: this.sect17,
      },
    ];
    scrollElements.forEach((item) => {
      const itemTop = item.viewName?.nativeElement.getBoundingClientRect().top;
      const itemHeight = item.viewName?.nativeElement.offsetHeight;
      if (itemTop <= 10 && itemTop > -itemHeight) {
        // console.log(item, itemTop, itemHeight);
        this.scrollPos = item.secName;
      }
    });

    const sect10Prop = this.sect10?.nativeElement;
    const sect10Top = this.sect10?.nativeElement.getBoundingClientRect().top;
    if ( sect10Top <= window.innerHeight && sect10Top >= -this.sect10?.nativeElement.offsetHeight ) {
      const scrollDist = window.scrollY - sect10Top;
      const backgroundPositionY = window.scrollY > sect10Top ? scrollDist : 0;
      sect10Prop.style.backgroundPositionY = `${backgroundPositionY * -0.1}px`;
    }

    const sect12Prop = this.sect12?.nativeElement;
    const sect12Top = this.sect12?.nativeElement.getBoundingClientRect().top;
    if ( sect12Top <= window.innerHeight && sect12Top >= -this.sect12?.nativeElement.offsetHeight ) {
      const scrollDist = window.scrollY - sect12Top;
      const backgroundPositionY = window.scrollY > sect12Top ? scrollDist : 0;
      sect12Prop.style.backgroundPositionY = `${backgroundPositionY * -0.1}px`;
    }
  }
}
