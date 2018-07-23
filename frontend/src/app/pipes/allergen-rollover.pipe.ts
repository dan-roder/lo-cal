import { Pipe, PipeTransform } from '@angular/core';
import { Config } from '@local/utils/constants';

@Pipe({
  name: 'allergenRollover'
})
export class AllergenRolloverPipe implements PipeTransform {
  constructor(private config: Config){}

  transform(value: any, args?: any): any {
    return this.config.allergenMap[value];
  }

}
