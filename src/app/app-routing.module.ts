import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './components/guards/auth.guard';


const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo:'/main', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
