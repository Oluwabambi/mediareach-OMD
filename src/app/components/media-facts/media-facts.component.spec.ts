import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFactsComponent } from './media-facts.component';

describe('MediaFactsComponent', () => {
  let component: MediaFactsComponent;
  let fixture: ComponentFixture<MediaFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
