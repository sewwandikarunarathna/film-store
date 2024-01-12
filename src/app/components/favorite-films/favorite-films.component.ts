import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrl: './favorite-films.component.scss'
})
export class FavoriteFilmsComponent implements OnInit {
  favItems: any[]=[];
  constructor(
    private favoriteService: FavoritesService,
    private cdr: ChangeDetectorRef
  ) { }

  
  ngOnInit(): void {
    this.loadFavItems();
  }
   
  clearAllFavs(){
    this.favoriteService.clearFavorites();
    window.alert('Deleted favorites successfully!');
    this.loadFavItems();
  }

  private loadFavItems() {
    this.favItems = this.favoriteService.getFavItems();
  }
}
