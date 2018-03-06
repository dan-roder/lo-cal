import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'lo-cal-post',
  templateUrl: './post.component.html',
  encapsulation: ViewEncapsulation.None
})

@AutoUnsubscribe()

export class PostComponent implements OnInit {
  public pageContent : any;

  constructor(private wordpressService: WordpressService, private route: ActivatedRoute) { }

  ngOnInit() {
    let slug = (this.route.snapshot.paramMap.get('slug'));

    this.wordpressService.getPostBySlug(slug, 'posts').subscribe(page => {
      this.pageContent = page[0];
      console.log(page);
    })
  }

  ngOnDestroy(){

  }

}
