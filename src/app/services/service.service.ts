import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse, Game } from '../models/gameI';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }


  getGameLList(ordering : string , search? : string) : Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering' , ordering) ;
    if (search) {
      params = new HttpParams().set('ordering' , ordering).set('search' , search) ;
    }
    return this.http.get<APIResponse<Game>>(`${environment.BASE_URL}/games` , {params})
  }
}
