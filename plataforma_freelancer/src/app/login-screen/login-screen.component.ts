import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent implements OnInit {

  
  usuarios: Usuario[];
  usuario: Usuario = new Usuario(123456, "TESTE");
  
  constructor(private router: Router) { 
    this.usuario.nome = "Isabel";
    this.usuario.cpf = 0;
    this.usuario.email = "isabel@gmail";
    this.usuario.senha = "aaabbb123";
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.usuario.nome = " ";
    this.usuario.cpf = 0;
    this.usuario.email = " ";
    this.usuario.senha = " ";
  }


  logar(){
    this.router.navigateByUrl('services');
  }

 /* Cadastrar(){
      this.usuarios.push(this.usuario)
  }*/
  
}

class Usuario {
  nome: string;
  cpf: number;
  email: string;
  senha: string;

  constructor(login: number, senha: string) {
    this.nome = " ";
    this.cpf = login;
    this.email = " ";
    this.senha = senha;
  }


}