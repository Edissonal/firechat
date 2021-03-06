import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Provedor } from '../../../../../inventario/src/app/models/provedores';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public _cs:ChatService) { }

  ngOnInit() {
  }

  ingresar(proveedor:string) {
    console.log(proveedor);
    this._cs.login(proveedor);
  }
}
