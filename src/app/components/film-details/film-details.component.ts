import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  filmId!: number;
  film: any;
  filmList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private favoriteService: FavoritesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.filmId = +id;
      this.http.get<any[]>('/assets/films.json').subscribe((films) => {
        this.film = films.find((film) => film.id === this.filmId);
        this.filmList = this.film.filmList;
        console.log(this.filmId, this.film);
      });
    }
  }

  addToFavorites(item: string) {
    this.favoriteService.addToFavorites(item);
  }
}
