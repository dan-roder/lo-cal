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
import { OrderDetailComponent } from '@local/pages/order-detail/order-detail.component';
import { PasswordResetComponent } from '@local/pages/password-reset/password-reset.component';
import { NotFoundComponent } from './pages/not-found-component/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: 'Home' } },
      { path: 'our-story', component: OurStoryComponent, data: { title: 'Our Story' }  },
      { path: 'our-food', component: OurFoodComponent, data: { title: 'Our Food' }  },
      { path: 'catering', component: CateringComponent, data: { title: 'Catering' }  },
      { path: 'login', component: LoginComponent, data: { title: 'Login' }  },
      { path: 'password-reset', component: PasswordResetComponent, data: { title: 'Reset Password' }  },
      { path: 'create-account', component: CreateAccountComponent, data: { title: 'Create Account' }  },
      { path: 'contact', component: ContactComponent, data: { title: 'Contact Us' }  },
      { path: 'blog', component: BlogComponent, data: { title: 'Blog' }  },
      { path: 'blog/:post', component: BlogPostComponent },
      { path: 'account', component: AccountLayoutComponent, data: { title: 'Account' }, canActivate: [AuthGuard],
        children: [
          { path: '', component: AccountComponent, data: { title: 'Account' }  },
          { path: 'order-history', component: OrderHistoryComponent, data: { title: 'Order History' }  },
          { path: 'order-history/:orderid', component: OrderDetailComponent }
        ]
      },
      {
        path: 'checkout', component: CheckoutLoginComponent, data: { title: 'Checkout' }
      },
      { path: 'checkout/review', component: CheckoutReviewComponent, canActivate: [AccessGuard], data: { title: 'Review Your Order' }  },
      { path: 'checkout/payment', component: CheckoutPaymentComponent, canActivate: [OrderGuard], data: { title: 'Complete Your Order' }  },
      { path: 'checkout/confirmation', component: ConfirmationComponent, data: { title: 'Confirmation' } },
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
    ],
    data: { title: 'Menu' }
  },
  {
    path: 'menu/:category',
    component: MainLayoutComponent,
    runGuardsAndResolvers: 'paramsChange',
    children: [
      {
        path: '',
        component: SubMenuComponent,
        runGuardsAndResolvers: 'paramsChange'
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
  { path: '**',  component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}