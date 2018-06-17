import { Pipe, PipeTransform } from '@angular/core';
import { WordpressService } from '@local/services/wp.service';

@Pipe({
  name: 'subMenuImage'
})
export class SubMenuImagePipe implements PipeTransform {
  constructor(private wpService: WordpressService){

  }

  transform(value: any, args?: any): any {
    this.wpService.getSubMenuImage(value).subscribe(imageDetails => {
      console.log(imageDetails);
    })
    return null;
  }

}
