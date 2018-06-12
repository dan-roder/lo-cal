import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageModule } from '@ngx-pwa/local-storage';

// Config
import { Config } from './utils/constants';

// Components
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { OurFoodComponent } from './pages/our-food/our-food.component';
import { MenuPageComponent } from './pages/menu/menu.component';
import { MenuCustomizeComponent } from './pages/menu-customize/menu-customize.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';
import { CateringComponent } from './pages/catering/catering.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AccountComponent } from './pages/account/account.component';
import { CheckoutLoginComponent } from './pages/checkout-login/checkout-login.component';
import { CheckoutReviewComponent } from './pages/checkout-review/checkout-review.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

// Shared Components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TitleBodyImagesComponent } from './shared/components/title-body-images/title-body-images.component';
import { IntroSectionComponent } from './shared/components/intro-section/intro-section.component';
import { ImageAndTextComponent } from './shared/components/image-and-text/image-and-text.component';
import { HamburgerComponent } from './shared/components/hamburger/hamburger.component';
import { BagComponent } from './shared/components/bag/bag.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';

// Services
import { WindowRef } from './utils/windowref';
import { WordpressService } from './services/wp.service';
import { MenuService } from './services/menu-service.service';
import { BagService } from './services/bag.service';
import { CustomerService } from './services/customer.service';
import { OrderService } from '@local/services/order.service';

// Directives
import { WindowScrollDirective } from './shared/directives/window-scroll.directive';
import { InputSwitcherDirective } from './shared/directives/input-switcher.directive';

//Pipes
import { AllergensPipe } from './pipes/allergens.pipe';
import { SafeHtml } from './pipes/safe-html.pipe';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { FeaturedImagePipe } from './pipes/featured-image.pipe';
import { CardTypePipe } from './pipes/card-type.pipe';

//Guards
import { AuthGuard } from '@local/guards/auth.guard';
import { AccessGuard } from '@local/guards/access.guard';
import { OrderGuard } from '@local/guards/order.guard';
import { CheckoutPaymentComponent } from './pages/checkout-payment/checkout-payment.component';

// Modules
import { ResponsiveModule } from 'ng2-responsive';
import { MonthMaskDirective } from './shared/directives/month-mask.directive';



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
    SafeHtml,
    LoginComponent,
    PostComponent,
    CateringComponent,
    ContactComponent,
    BlogComponent,
    BlogPostComponent,
    FeaturedImagePipe,
    CreateAccountComponent,
    LoginFormComponent,
    AccountComponent,
    InputSwitcherDirective,
    CheckoutLoginComponent,
    CheckoutReviewComponent,
    CheckoutPaymentComponent,
    MonthMaskDirective,
    ConfirmationComponent,
    OrderHistoryComponent,
    AccountLayoutComponent,
    CardTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LocalStorageModule,
    ResponsiveModule
  ],
  providers: [ Config, WindowRef, WordpressService, MenuService, BagService, CustomerService, AuthGuard, AccessGuard, OrderService, OrderGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
