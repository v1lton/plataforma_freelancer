import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent implements OnInit {

  nome: string;
  senha: string;
  usuarios: string[];
  
  constructor() { 
    this.nome = "";
    this.senha = "";
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.nome = "";
    this.senha = "";
  }


  logar(){
    if(this.nome.length >= 5 && this.senha.length >= 3){
      this.usuarios.push(this.nome + " " + this.senha);
      this.nome = ""
      this.senha = ""
    }
  }
  

}
