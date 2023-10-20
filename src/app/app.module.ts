import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardComponent } from './components/card/card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RightbarComponent } from './components/rightbar/rightbar.component';
// icon
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvseriesComponent } from './pages/tvseries/tvseries.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { DefaultlayoutComponent } from './layout/defaultlayout/defaultlayout.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthenticationlayoutComponent } from './layout/authenticationlayout/authenticationlayout.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommunityComponent } from './pages/community/community.component';
import { RecentComponent } from './pages/recent/recent.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CardComponent,
    SidebarComponent,
    RightbarComponent,
    TvseriesComponent,
    MoviesComponent,
    AnimeComponent,
    DefaultlayoutComponent,
    SigninComponent,
    AuthenticationlayoutComponent,
    CommunityComponent,
    RecentComponent,
    SettingsComponent,
    SearchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
