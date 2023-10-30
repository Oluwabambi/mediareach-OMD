import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LocationsComponent } from './components/locations/locations.component';
import { MediaFactsComponent } from './components/media-facts/media-facts.component';
import { NewsComponent } from './components/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CareersComponent } from './components/careers/careers.component';
import { HomeComponent } from './pages/home/home.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationsComponent,
    MediaFactsComponent,
    NewsComponent,
    CareersComponent,
    AchievementsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
