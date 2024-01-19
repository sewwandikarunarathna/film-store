import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoriteFilmsComponent } from './components/favorite-films/favorite-films.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeTextComponent } from './components/home-text/home-text.component';
import { UsersComponent } from './components/users/users.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NoificationComponent } from './components/noification/noification.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', redirectTo: '/main/home', pathMatch: 'full' },
  {
    path: 'main',
    component: ToolbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'home', component: HomeTextComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: MyProfileComponent },
      { path: 'notifications', component: NoificationComponent },
      { path: 'films', component: FilmListComponent },
      { path: 'films/:id', component: FilmDetailsComponent },
      { path: 'favorites', component: FavoriteFilmsComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
