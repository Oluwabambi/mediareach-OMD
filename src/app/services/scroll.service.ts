import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  @ViewChild('sect04') sect04: ElementRef | undefined

  constructor() { }
}
