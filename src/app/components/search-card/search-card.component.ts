import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { dataMoviesSearch } from 'src/interfaces';


@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {
  @Input() dataMovies!: dataMoviesSearch
  
}
