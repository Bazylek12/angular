import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostTokenService {

  constructor(private _http: HttpClient) { }

  
  sendToken(token: string){
    const URL = 'http://scores.chrum.it/check-token';
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    const options = { headers }
    
    return this._http.post<{success: boolean}>(URL, {
      'auth-token': token
    }, options);
  }
}
