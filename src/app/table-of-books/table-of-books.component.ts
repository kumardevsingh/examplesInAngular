import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../service/http-api.service'
import { Observable } from 'rxjs/Observable';
import { error } from 'util';


@Component({
  selector: 'app-table-of-books',
  templateUrl: './table-of-books.component.html',
  styleUrls: ['./table-of-books.component.css']
})
export class TableOfBooksComponent implements OnInit {
  public activities$: Observable<any>;
  constructor(private httpService:HttpApiService) { }
 bookJson:any;
 errors:any;
 someProperty:string='3';
 inputValue="abc"
  ngOnInit() {
   //this.httpService.getAllBooks.subscribe(responce =>this.bookJson=responce);
   this.httpService.getActivities().subscribe(
     res=> {
       this.activities$=res
      }, 
     error => {
      this.errors = error;
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
  
    );
  }

}
