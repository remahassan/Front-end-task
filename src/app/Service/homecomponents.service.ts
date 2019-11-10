import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomecomponentsService {
  listOfComponent:string[]=["header","collectionitems","newarrival","deal","trending","threeblock","brands","question","footer","copyright"];
  constructor() { }
  getComponents():string[]
  {
    return this.listOfComponent;
  }

}
