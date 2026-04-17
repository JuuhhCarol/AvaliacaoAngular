import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-page',
  imports: [],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {

  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();

  name: string = "";
  email: string = "";
  nascimento:date = "";
  tel: Int16Array = "";
  senha: string = "";

  changed(e: Event) {
    this.senha = (e.target as HTMLInputElement).value;
  }

  submit() {
    if (!this.senha) {
      alert('Digite uma senha.');
      return;
    }

    console.log("Conta criada com sucesso!");

}

  


}
