import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DustbinViewComponent } from './dustbin/view/view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomePageComponent },
  { path: 'dustbinList', component: DustbinViewComponent},
  { path: 'signout', component:  SignoutComponent},
  { path: 'Sign-In', component:  SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}