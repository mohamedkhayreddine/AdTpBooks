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
        console.log(args)
        console.log(item.volumeInfo.authors);
        return item.volumeInfo.authors[0].toLowerCase().includes(args.toLowerCase());
      });
    }

  }

}
