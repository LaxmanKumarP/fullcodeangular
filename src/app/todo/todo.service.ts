import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../shared/interfaces/todo';
import { map, Observable } from 'rxjs';

@Injectable()
//   {
//   providedIn: 'root'
// }
// )
export class TodoService {
  baseUrl = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  getTodos():Observable<ITodo[]>{
    return this.http.get(`${this.baseUrl}/todos`).pipe
    (map
      (res =>res as ITodo[]));
  }
}
