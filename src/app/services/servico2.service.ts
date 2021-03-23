import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './../models/Album.model';

@Injectable({
  providedIn: 'root'
})
export class Servico2Service {


  constructor(private http:HttpClient) {

  }
  public getAlbum(numero):Observable<any>{

   return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+numero)
  }

}

//
