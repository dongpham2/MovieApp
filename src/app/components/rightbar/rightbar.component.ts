import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent {
  data:any=[]
  searchValue = ''
  searchForm = this.fb.group({
    searchValue: ''
  })
  constructor(private movie:MoviesService, private fb: FormBuilder) {
    this.movie.getData().subscribe(data=>{
      console.log("dataaaa",data)
      this.data = data
    })
  }
  // fetchData() : void {
  //   this.MoviesService.getData(this.searchValue).subscribe((movie) => {
  //     this.movie = movie
  //   })
  // }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? ''
  }
}
