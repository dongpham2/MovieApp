import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit {
  movies: any = [];
  filteredMovies: any = [];
  searchValue: string = '';
  loading: boolean = false;
  constructor(private mv: MoviesService) {}

  ngOnInit(): void {
    // this.loading = true;
    this.mv.getData()
    .pipe(
      tap(() => {
        // this.loading = false; // Kết thúc tiến trình loading
      })
    )
    .subscribe((res) => {
      console.log("🚀 ~ file: rightbar.component.ts:24 ~ RightbarComponent ~ this.mv.getData ~ res:", res);
      this.movies = res;
      this.filteredMovies = res;
    });
  }

  onSearchSubmit(): void {
    this.Search();
  }

  Search() {
    if (this.searchValue === "") {
      this.filteredMovies = this.movies;
    } else {
      this.filteredMovies = this.movies.filter((movie: any) => {
        const title = movie.title?.toLowerCase(); // Check if title exists before accessing toLowerCase()
        const genre = movie.genre?.toLowerCase(); // Check if genre exists before accessing toLowerCase()

        return (
          title && title.includes(this.searchValue.toLowerCase()) ||
          genre && genre.includes(this.searchValue.toLowerCase())
        );
      });
    }
  }
}