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
        if(postObj.submenu_image !== undefined){
          return postObj.submenu_image.url;
        }
        else{
          return '';
        }
      }
      else{
        return '';
      }
    }
  }

}