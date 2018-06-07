import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { OurFoodComponent } from './pages/our-food/our-food.component';
import { MenuPageComponent } from './pages/menu/menu.component';
import { MenuCustomizeComponent } from './pages/menu-customize/menu-customize.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';
import { LoginComponent } from '@local/pages/login/login.component';
import { PostComponent } from './pages/post/post.component'
import { CateringComponent } from '@local/pages/catering/catering.component';
import { ContactComponent } from '@local/pages/contact/contact.component';
import { BlogComponent } from '@local/pages/blog/blog.component';
import { BlogPostComponent } from '@local/pages/blog-post/blog-post.component';
import { CreateAccountComponent } from '@local/pages/create-account/create-account.component';
import { AccountComponent } from '@local/pages/account/account.component';
import { AuthGuard } from '@local/guards/auth.guard';
import { CheckoutLoginComponent } from '@local/pages/checkout-login/checkout-login.component';
import { AccessGuard } from '@local/guards/access.guard';
import { CheckoutReviewComponent } from '@local/pages/checkout-review/checkout-review.component';
import { OrderGuard } from '@local/guards/order.guard';
import { CheckoutPaymentComponent } from '@local/pages/checkout-payment/checkout-payment.component';
import { OrderHistoryComponent } from '@local/pages/order-history/order-history.component';
import { AccountLayoutComponent } from '@local/layouts/account-layout/account-layout.component';
import { ConfirmationComponent } from '@local/pages/confirmation/confirmation.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'our-story', component: OurStoryComponent },
      { path: 'our-food', component: OurFoodComponent },
      { path: 'catering', component: CateringComponent },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog/:post', component: BlogPostComponent },
      { path: 'account', component: AccountLayoutComponent, canActivate: [AuthGuard],
        children: [
          { path: '', component: AccountComponent },
          { path: 'order-history', component: OrderHistoryComponent }
        ]
      },
      {
        path: 'checkout', component: CheckoutLoginComponent
      },
      { path: 'checkout/review', component: CheckoutReviewComponent, canActivate: [AccessGuard] },
      { path: 'checkout/payment', component: CheckoutPaymentComponent, canActivate: [OrderGuard] },
      { path: 'checkout/confirmation', component: ConfirmationComponent }
    ]
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'menu',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MenuPageComponent
      },
    ]
  },
  {
    path: 'menu/:category',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: SubMenuComponent
      },
      {
        path: ':item',
        component: MenuCustomizeComponent
      },
    ]
  },
  {
    path: ':slug',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PostComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}