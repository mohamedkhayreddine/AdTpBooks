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
        if (!item.volumeInfo.authors) {
          return value;
        }
        return item.volumeInfo.authors[0].toLowerCase().includes(args.toLowerCase()) | item.volumeInfo.title.toLowerCase().includes(args.toLowerCase());
      });
    }

  }

}
