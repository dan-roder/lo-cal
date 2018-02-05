import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { OurFoodComponent } from './pages/our-food/our-food.component';
import { MenuPageComponent } from './pages/menu/menu.component';
import { MenuCustomizeComponent } from './pages/menu-customize/menu-customize.component';


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
    path: 'menu/:item',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MenuPageComponent
      },
      {
        path: ':type',
        component: MenuCustomizeComponent
      },
    ]
  },
  {
    path: 'our-story',
    component: MainLayoutComponent,
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