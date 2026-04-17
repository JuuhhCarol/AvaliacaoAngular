import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  @Input()
   _value: string = "";

  onInputChange = (value: any) => {
    this._value = value.target.value;
  }
 
}
