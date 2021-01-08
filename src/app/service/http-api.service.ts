import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

interface ibook {
  id: string;
  name: string;
  address: object;
}
let url = 'https://jsonplaceholder.typicode.com/posts';
@Injectable()
export class HttpApiService {
  

  constructor(private _http:Http) { }
  public getAllBooks(url: string): Observable<any>{
    return this._http.get(url).map ((res:Response)=>res.json())
  };
  public getActivities(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/postsa')
        .map(res => res.json())
        .do(data => console.log(data))
        .catch(this.handleError)
}
  // getBooks(): any {
  //   return this._http.get('https://jsonplaceholder.typicode.com/posts')
    
  // }

  private handleError(error:Response){
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

}
