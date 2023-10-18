import { Component, OnInit } from '@angular/core';
import { routeData } from "./route"
import { fakeData } from "./route"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public routeData = routeData
  public fakeData = fakeData

  ngOnInit(): void {

  }
}
