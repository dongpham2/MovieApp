import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      
  }

  url:string = 'http://localhost:3000/movies';
   
  getData() {
    return this.http.get(this.url);
  }

  // getSearchData(searchtext:string) {
    // return this.http.get() (
    //   `http://localhost:3000/movies?search=${searchtext}`
    // );
  //   let url = `http://localhost:3000/movies?search=${searchtext}`; // Thêm query parameter 'search' vào URL
  //   return this.http.get(url);
  // }
}