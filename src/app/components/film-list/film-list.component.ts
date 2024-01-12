import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent implements OnInit {
  films: any[] = [];
  totalFilms = new Promise ((resolve, reject) => {
    setTimeout(()=>{
      resolve(this.films.length);
    }, 2000);
  })

  constructor(private http: HttpClient, private filmsService: FilmsService,) {}

  ngOnInit() {
    this.loadFilms();
  }

  private loadFilms() {
    this.filmsService.getFilms().subscribe(films => {
      this.films = films;
      console.log(this.films);
    });
  }
}
