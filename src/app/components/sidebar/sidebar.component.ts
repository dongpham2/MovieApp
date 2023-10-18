import { Component, OnInit } from '@angular/core';
// import { navbarData } from "./nav-data"
// import { libraryData } from "./nav-data"
// import { categoriesData } from "./nav-data"
import { mergedData } from "./nav-data"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public navbarData = navbarData
  // public libraryData = libraryData
  // public categoriesData = categoriesData
  public mergedData = mergedData

  constructor() { }

  ngOnInit(): void {

  }
}
