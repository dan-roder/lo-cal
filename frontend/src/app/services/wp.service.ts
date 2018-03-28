import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '../utils/constants';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class WordpressService {

  constructor(private http: Http, private config: Config, private httpClient: HttpClient) {}

  login(data) {
    let url = this.config.wordpressApiUrl + '/jwt-auth/v1/token';
    return this.http.post(url, data)
      .map(result => {
      return result.json();
    });
  }

  getPosts(query) {
    query = this.transformRequest(query);
    let url = this.config.wordpressApiUrl + `/wp/v2/posts?${query}&_embed`;
    return this.http.get(url)
      .map(result => {
      return result.json();
    });
  }

  getPost(id): Observable<any> {
    return this.http.get(this.config.wordpressApiUrl + `/wp/v2/posts/${id}?_embed`)
      .map((res: Response) => res.json());
  }

  getMedia(id) {
    return this.httpClient.get(this.config.wordpressApiUrl + `/wp/v2/media/${id}`);
  }

  getCategories() {
    return this.http.get(this.config.wordpressApiUrl + '/wp/v2/categories?per_page=100')
    .map(result => {
      return result.json();
    });
  }

  getTags() {
    return this.http.get(this.config.wordpressApiUrl + '/wp/v2/tags?per_page=100')
    .map(result => {
      return result.json();
    });
  }

  getPages() {
    return this.http.get(this.config.wordpressApiUrl + '/wp/v2/pages?per_page=100')
    .map(result => {
      return result.json();
    });
  }

  getPage(id): Observable<any> {
    return this.httpClient.get(this.config.wordpressApiUrl + `/wp/v2/pages/${id}?_embed`);
  }

  getPostBySlug(_slug: string, _postType: string){
    return this.httpClient.get(this.config.wordpressApiUrl + `/wp/v2/${_postType}?slug=${_slug}`);
  }

  getMenus() {
    return this.http.get(this.config.wordpressApiUrl + '/wp-api-menus/v2/menus')
    .map(result => {
      return result.json();
    });
  }

  getMenu(id) {
    return this.http.get(this.config.wordpressApiUrl + `/wp-api-menus/v2/menus/${id}`)
      .map(result => {
      return result.json();
    });
  }

  private transformRequest( obj ) {
    let p, str;
    str = [];
    for (p in obj) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
    return str.join('&');
  }

  getCustomPostType( base ): Observable<any>{
    return this.httpClient.get(this.config.wordpressApiUrl + `/wp/v2/${base}?_embed`);
  }

  getCustomPostTypeById( base, id ): Observable<any>{
    return this.httpClient.get(this.config.wordpressApiUrl + `/wp/v2/${base}/${id}`);
  }

}
