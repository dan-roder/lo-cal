import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@Component({
  selector: 'lo-cal-blog-post',
  templateUrl: './blog-post.component.html'
})

@AutoUnsubscribe()

export class BlogPostComponent implements OnInit {
  public pageContent : any;
  public featuredImage : any;

  constructor(private wordpressService: WordpressService, private route: ActivatedRoute) { }

  ngOnInit() {
    let slug = (this.route.snapshot.paramMap.get('post'));

    this.wordpressService.getPostBySlug(slug, 'blog_post').subscribe(page => {
      this.pageContent = page[0];

      if(page[0].featured_media != 0){
        this.wordpressService.getMedia(page[0].featured_media).subscribe(media => {this.featuredImage = media; console.log(media)});
      }
    })
  }

  ngOnDestroy(){}
}
