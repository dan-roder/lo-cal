import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WordpressService } from '@local/services/wp.service';
import * as _ from 'lodash';

@Pipe({
  name: 'cardImage'
})
export class CardImagePipe implements PipeTransform {

  constructor(private wpService: WordpressService) { }

  transform(alohaMenuId: any, menuItemMap?: any) {
    console.log(alohaMenuId);
    if(alohaMenuId) {
      let postObj = _.find(menuItemMap, {'menuid' : String(alohaMenuId)});
      console.log(postObj);

      return this.wpService.getCustomPostTypeById('menu_item', postObj.id).map(post => {
        if(post.acf.submenu_image !== undefined){
          return post.acf.submenu_image.url;
        }
        else{
          return "//via.placeholder.com/265x115";
        }
      });
    }

    return "//via.placeholder.com/265x115";
  }

}