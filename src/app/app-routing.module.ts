import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultlayoutComponent } from './layout/defaultlayout/defaultlayout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthenticationlayoutComponent } from './layout/authenticationlayout/authenticationlayout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultlayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthenticationlayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }