import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent,
  }, 
  {
    path: 'user-page',
    component: UserPageComponent,
  }, 
  {
    path: 'home-page',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
