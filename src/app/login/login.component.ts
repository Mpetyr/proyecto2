import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent{

  public loginForm !: FormGroup

  constructor(private route:Router, private formBuilder: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login() {
    
    let mostrar = document.getElementById("mensaje");
    this.http.get<any>("http://localhost:3000/registerUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user) {
        alert("Inicio de sesion correcto");
        this.loginForm.reset();
        this.route.navigate(['home']);
      }else if(mostrar != null){
        mostrar.style.visibility = "visible";
      }
    },err=>{
      alert("Algo salio mal")
    })

  }
}
