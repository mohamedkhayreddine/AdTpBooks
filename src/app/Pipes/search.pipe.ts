import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args?: any): any {

    if (!args) {
      return value;
    } else {
      return value.filter(item => {
        return item.volumeInfo.title.toLowerCase().includes(args.toLowerCase());
      });
    }

  }

}
