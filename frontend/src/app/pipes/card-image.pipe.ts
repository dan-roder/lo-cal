import { Pipe, PipeTransform } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Pipe({
  name: 'cardImage'
})
export class CardImagePipe implements PipeTransform {

  constructor(private wpService: WordpressService) { }

  transform(alohaMenuId: any, menuItemMap?: any) {
    if(alohaMenuId) {
      let postObj = _.find(menuItemMap, {'menuid' : String(alohaMenuId)});

      if(postObj !== undefined){
        return this.wpService.getCustomPostTypeById('menu_item', postObj.id).map(post => {
          if(post.acf.submenu_image !== undefined){
            return post.acf.submenu_image.url;
          }
          else{
            return "";
          }
        });
      }
      else{
        return Observable.of('');
      }
    }
  }

}