import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from 'src/app/helpers/full-achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements = ACHIEVEMENTS;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
