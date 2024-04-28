import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhoneNumber'
})
export class FormatPhoneNumberPipe implements PipeTransform {

  transform(value: string, args?: boolean): string {
    // Check if the value is not null or undefined
    if (!value) return '';

    // Remove non-numeric characters from the input string
    const cleaned = ('' + value).replace(/\D/g, '');

    // Format the phone number as (###) ### ####
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      if (Boolean(args))
        return '(' + match[1] + ') ' + match[2] + ' ' + match[3];
      else
        return '(' + match[1] + ')' + match[2] + match[3];
    }

    // If the input is not in the expected format, return the original value
    return value;
  }

}
