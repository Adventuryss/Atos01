import { Album } from './../models/Album.model';
import { Servico2Service } from '../services/servico2.service';
import { Photo } from '../models/Photo.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-componente-servico2',
  templateUrl: './componenteservico2.component.html',
  styleUrls: ['./componenteservico2.component.css']
})
export class ComponenteServico2Component implements OnInit {

  albuns:Album;
  erro:any;

  numero:number;
  number = null;
  teste = null;

  number1 = new FormGroup(
    {
      number:new FormControl('')
    }
    );


  salvar(){
    this.teste = this.number;
    this.getter();
}

  constructor(private photoServico:Servico2Service) {

   }

  ngOnInit(): void {
  }


  getter(){

    this.photoServico.getAlbum(this.teste).subscribe
    (
      (data:Album) =>
      {
         this.albuns = data;

         console.log('O que retornou em data:',data);
         console.log('Variavel albuns:',this.albuns);
      },
      (error: any) =>
      {
        this.erro = error;
        console.error('ERRO:',this.erro);
      }

    );
  }
}
