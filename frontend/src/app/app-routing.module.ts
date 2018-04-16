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
      { path: 'blog/:post', component: BlogPostComponent }
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