import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient ) { }

  getData() {
    let url = 'http://localhost:3000/movies'
    return this.http.get(url)
  }
}
