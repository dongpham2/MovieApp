import { Component, Input, OnInit } from '@angular/core';
import { dataMoviesType } from 'src/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data!: dataMoviesType
  public isCard!: boolean
  ngOnInit(): void {

  }

}
