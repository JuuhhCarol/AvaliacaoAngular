import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.css',
})
export class Botao {
  isClicked:boolean = false;
  
  @Output()
  Click: EventEmitter = new EventEmitter();

  @Input()
  label: string = "";

  clicked = () => {
  this.Click.emit();
  }
}
