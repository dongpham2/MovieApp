import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { navbarData } from "./nav-data"
// import { libraryData } from "./nav-data"
// import { categoriesData } from "./nav-data"
import { Router } from '@angular/router';
import { mergedData } from "./nav-data"

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean 
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public navbarData = navbarData
  // public libraryData = libraryData
  // public categoriesData = categoriesData
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  public mergedData = mergedData
  public collapsed = true
  

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }

  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
  }

  closeSideNav() : void {
    this.collapsed = false
  }

}
