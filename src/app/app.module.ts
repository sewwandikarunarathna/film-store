import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module'; 
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FavoriteFilmsComponent } from './components/favorite-films/favorite-films.component';
import { HighlightRatingDirective } from './directives/highlight-rating.directive';
import { CommentsComponent } from './components/comments/comments.component';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { commentReducer } from './state/comments/comment.reducer';
// import { CommentEffects } from './state/comments/comment.effects';
import { EffectsModule } from '@ngrx/effects';
import { HomeTextComponent } from './components/home-text/home-text.component';
import { loginInterceptor } from './interceptors/login.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { UsersComponent } from './components/users/users.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NoificationComponent } from './components/noification/noification.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailsComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    ToolbarComponent,
    DashboardComponent,
    HomeComponent,
    HomeTextComponent,
    FavoriteFilmsComponent,
    HighlightRatingDirective,
    CommentsComponent,
    UsersComponent,
    MyProfileComponent,
    NoificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ comments: commentReducer}),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production,
    // }),
    // EffectsModule.forRoot([CommentEffects]),
  ],
  providers: [provideHttpClient(withInterceptors([loginInterceptor, errorInterceptor])),
provideStore(),
provideState({name: 'comments', reducer: commentReducer})],
  bootstrap: [AppComponent]
})
export class AppModule { }
