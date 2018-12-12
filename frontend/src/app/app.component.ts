import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // ensure this isn't getting blocked
        if(typeof (<any>window).ga !== 'undefined'){
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      }
    });
  }

  ngOnInit(){
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        let title = (event['title'] !== 'Home' && event['title'] !== undefined) ? event['title'] + ' | Lo-Cal Kitchen' : 'Lo-Cal Kitchen';
        this.titleService.setTitle(title)
      });
  }
}
