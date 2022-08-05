import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent{

  email: string = "";
  password: string = "";

  constructor(private route:Router) { }

  login() {
    let mostrar = document.getElementById("mensaje");
    let vacio = document.getElementById("vacio");
    console.log(this.email);
    console.log(this.password);
    if (this.email === "prueba@gmail.com" && this.password === "prueba") {
      
      this.route.navigate(['home']);
    }else if(this.email != "prueba@gmail.com" && this.password != "prueba" && mostrar != null){
      mostrar.style.visibility = "visible";
    }
  }
}
