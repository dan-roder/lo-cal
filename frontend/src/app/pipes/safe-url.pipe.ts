import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  transform(value: any): any {
    value = value.toLowerCase();
    let noChars = value.replace(/[^a-z -]/, '');
    let properUrl = noChars.replace(/\s+/g, '-');

    return properUrl;
  }

}
