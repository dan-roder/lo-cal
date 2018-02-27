import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

// Config
import { Config } from './utils/constants';

// Components
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { OurFoodComponent } from './pages/our-food/our-food.component';
import { MenuPageComponent } from './pages/menu/menu.component';
import { MenuCustomizeComponent } from './pages/menu-customize/menu-customize.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';

// Shared Components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TitleBodyImagesComponent } from './shared/components/title-body-images/title-body-images.component';
import { IntroSectionComponent } from './shared/components/intro-section/intro-section.component';
import { ImageAndTextComponent } from './shared/components/image-and-text/image-and-text.component';
import { HamburgerComponent } from './shared/components/hamburger/hamburger.component';
import { BagComponent } from './shared/components/bag/bag.component';

// Services
import { WordpressService } from './services/wp.service';
import { MenuService } from './services/menu-service.service';
import { WindowRef } from './utils/windowref';

// Directives
import { WindowScrollDirective } from './shared/directives/window-scroll.directive';

//Pipes
import { AllergensPipe } from './pipes/allergens.pipe';
import { SafeHtml } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    FooterComponent,
    OurStoryComponent,
    HeaderComponent,
    TitleBodyImagesComponent,
    IntroSectionComponent,
    ImageAndTextComponent,
    OurFoodComponent,
    HamburgerComponent,
    WindowScrollDirective,
    MenuPageComponent,
    MenuCustomizeComponent,
    BagComponent,
    SubMenuComponent,
    AllergensPipe,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ Config, WindowRef, WordpressService, MenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
