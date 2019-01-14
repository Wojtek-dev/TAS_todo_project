import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService {
    
    constructor(private http: HttpClient) {
  
    }

}