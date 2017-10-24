import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { OurFoodComponent } from './pages/our-food/our-food.component';
import { MenuPageComponent } from './pages/menu/menu.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MainLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: MenuPageComponent
      }
    ]
  },
  {
    path: 'our-story',
    component: MainLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: OurStoryComponent
      }
    ]
  },
  {
    path: 'our-food',
    component: MainLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: OurFoodComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}