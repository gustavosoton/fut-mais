import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(str: string): unknown {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
