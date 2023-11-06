import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultlayoutComponent } from './layout/defaultlayout/defaultlayout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthenticationlayoutComponent } from './layout/authenticationlayout/authenticationlayout.component';
import { CommunityComponent } from './pages/community/community.component';
import { RecentComponent } from './pages/recent/recent.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { TvseriesComponent } from './pages/tvseries/tvseries.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { CelebComponent } from './pages/celeb/celeb.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultlayoutComponent,
    children: [
      {
        path: '',
        pathMatch:"full",
        redirectTo: "home",
        // component: HomepageComponent,
      },
      {
        path: 'home',
        component: HomepageComponent,
        children: [
          {
            path: 'anime',
            component: AnimeComponent
          },
          {
            path: 'tvseries',
            component: TvseriesComponent
          }
        ]
      },
      {
        path: 'community',
        component: CommunityComponent
      },
      {
        path: 'recent',
        component: RecentComponent
      },
      {
        path: 'discover',
        component: DiscoverComponent
      },
      {
        path: 'awards',
        component: AwardsComponent
      },
      {
        path: 'celeb',
        component: CelebComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      
    ]
  },
  {
    path: 'auth',
    component: AuthenticationlayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }