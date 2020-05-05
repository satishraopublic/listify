import { Component, OnInit } from '@angular/core';
import { ListApiService } from 'src/app/services/list-api.service';
import { Observable } from 'rxjs';
import { List } from 'src/app/types/list';
import { ListType } from 'src/app/types/list-type.enum';

@Component({
  selector: 'app-showlists',
  templateUrl: './showlists.component.html',
  styleUrls: ['./showlists.component.css']
})
export class ShowlistsComponent implements OnInit {

  ListTypeEnum = ListType;
  lists$:Observable<List[]>;
  constructor(private listApi:ListApiService) { }

  ngOnInit(): void {
    this.lists$ = this.listApi.getLists();
  }

  ShowList(listName:string){
    alert(listName);
  }

}
