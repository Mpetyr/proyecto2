import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;

  constructor(private route:Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email:[''],
      password:[''],
      repeatPassword:['']
    })

  }

  register() {

    this.http.post<any>("http://localhost:3000/registerUsers", this.registerForm.value)
    .subscribe(res =>{
      alert("Registro realizado");
      this.registerForm.reset();
      this.route.navigate(['/']);
    },err=>{
      alert("Oh oh algo salio mal")
    })

  }

}
