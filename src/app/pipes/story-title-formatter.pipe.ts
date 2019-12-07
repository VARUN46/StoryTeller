import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storyTitleFormatter'
})
export class StoryTitleFormatterPipe implements PipeTransform {

  transform(value: string): string {
    let result: string = value;
    if (value === null || typeof(value) === 'undefined' || value.length === 0) {
      result = ' Title Not Set';
    }
    if (result.length > 40) {
      result = result.substring(0, 40);
    }
    result = result + '...';
    return result;
  }

}
