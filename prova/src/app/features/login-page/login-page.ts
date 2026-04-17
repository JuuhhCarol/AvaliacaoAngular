import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit{
  isSubscribe = false;

  constructor (
    private _routes: Router,
    private _aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._aRoute.params.subscribe((param) => {
      this.isSubscribe = param['tab'] == "subscribe";
      if (this.isSubscribe) {
        console.log("login feito kkk")
      }
    })
  }  


}
