import { Component } from '@angular/core';
import { FormatPhoneNumberPipe } from './format-phone-number.pipe';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {
phoneNumber = '4157547189'

}
