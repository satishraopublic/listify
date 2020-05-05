import { Injectable } from '@angular/core';
import { List } from '../types/list';
import { ListType } from '../types/list-type.enum';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  LISTS:List[] = [
    {name: 'Indian store', description: 'Items to bring from the indian store', type: ListType.ShoppingList, dateCreated:'2020-05-05T00:31:55+00:00'},
    {name: 'Hinen Grocery store', description: 'Items to bring from the Hinen Grocery store', type: ListType.ShoppingList, dateCreated:'2020-05-05T00:31:55+00:00'},
    {name: 'Amazon Online store', description: 'Items to bring from the Amazon online store', type: ListType.ShoppingList, dateCreated:'2020-05-05T00:31:55+00:00'},
    {name: 'Things to do - May 2020', description: 'Things to do in May 2020', type: ListType.CheckList, dateCreated:'2020-05-05T00:31:55+00:00'}
  ]

  constructor() { }

  getLists() : Observable<List[]> | null
  {
    return new Observable(obs => {
      obs.next(this.LISTS)
      obs.complete()
    });
  }
}
