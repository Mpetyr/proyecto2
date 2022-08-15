import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


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
        Swal.fire(
          'Exitoso',
          'Inicio de sesion correcto',
          'success'
        )
        this.loginForm.reset();
        this.route.navigate(['home']);
      }else if(mostrar != null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrecto',
        })
      }
    },err=>{
      alert("Algo salio mal")
    })

  }
}
