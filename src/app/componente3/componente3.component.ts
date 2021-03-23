import { Pessoa } from './../models/Pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {


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


  constructor() { }

  ngOnInit(): void {
  }

}
