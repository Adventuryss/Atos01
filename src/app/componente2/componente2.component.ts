import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {


  pessoas = [
    {nome: "Fabricio", papel: "professor"},
    {nome: "Reiner", papel: "professor"},
    {nome: "Bruno", papel: "aluno"},
    {nome: "Ciclano", papel: "aluno"},
    {nome: "Beltrano", papel: "aluno"},
    {nome: "Caesar", papel: "aluno"},
    {nome: "Augustus", papel: "aluno"},
    {nome: "Pompeu", papel: "aluno"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
