import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  transform(value: any): any {
    let lowercase = value.toLowerCase().trim();
    let noChars = lowercase.replace(/[^a-z1-9 -]/g, '');
    let doubleHyphens = noChars.replace(/[-]{2,}/g, '-');
    let properUrl = doubleHyphens.replace(/\s+/g, '-');

    return properUrl;
  }

}
