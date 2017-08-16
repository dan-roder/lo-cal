import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Config
import { Config } from './utils/constants';

// Components
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TitleBodyImagesComponent } from './shared/components/title-body-images/title-body-images.component';
import { IntroSectionComponent } from './shared/components/intro-section/intro-section.component';

// Services
import { WordpressService } from './services/wp.service';
import { WindowRef } from './utils/windowref';
import { OurStoryComponent } from './pages/our-story/our-story.component';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    FooterComponent,
    OurStoryComponent,
    HeaderComponent,
    TitleBodyImagesComponent,
    IntroSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ Config, WindowRef, WordpressService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
