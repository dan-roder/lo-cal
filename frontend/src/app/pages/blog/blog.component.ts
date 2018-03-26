import { Component, OnInit } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@Component({
  selector: 'lo-cal-blog',
  templateUrl: './blog.component.html'
})

@AutoUnsubscribe()

export class BlogComponent implements OnInit {
  public featuredImage : any;
  public allBlogPosts : any;

  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
    this.wordpressService.getCustomPostType('blog_post').subscribe(posts => {this.allBlogPosts = posts; console.log(posts);})
  }

}
