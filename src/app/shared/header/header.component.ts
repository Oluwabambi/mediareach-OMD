import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() scrollPos = 'HOME';
  isNavShown: boolean = false;


  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig?.path === "achievements") {
      this.scrollPos = '';
    }
  }

}
