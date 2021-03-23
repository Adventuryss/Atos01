import { Pessoa } from './../models/Pessoa.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {


  pessoas = [

    new Pessoa("Fabricio", "professor"),
    new Pessoa("Reiner", "professor"),
    new Pessoa("Bruno", "aluno"),
    new Pessoa("Ciclano", "aluno"),
    new Pessoa( "Beltrano",  "aluno"),
    new Pessoa("Caesar",  "aluno"),
    new Pessoa("Augustus", "aluno"),
    new Pessoa("Pompeu", "aluno")
  ];


  selecionado = null;
  editando = null;
  nome  =null;
  papel = null;

  selecionar(pessoa){
    this.selecionado = pessoa;
  }

  cadastro = new FormGroup(

  {
    nome:new FormControl(''),
    papel:new FormControl('')
  }
  );

  salvar()
  {
    if(this.editando){
      this.editando.nome = this.nome;
      this.editando.papel = this.papel;
    }else{
      const d = new Pessoa(this.cadastro.value.nome, this.cadastro.value.papel);
      this.pessoas.push(d);
    }
    this.editando = null;
    this.nome = null;
  }


  excluir(pessoa){
    if(confirm('Deseja prosseguir com a exclusão?')){
      const i = this.pessoas.indexOf(pessoa);
      this.pessoas.splice(i,1);
    }
  }

  cancelar(){
    this.nome = null;
    this.papel = null;
    this.editando = null;
  }

  editar(pessoa){
    this.editando = pessoa;
    this.nome = pessoa.nome;
    this.papel = pessoa.papel;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
