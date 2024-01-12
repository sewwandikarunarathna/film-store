import { ChangeDetectorRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favItems: any[] = [];
  isItemAvailable: boolean = false;

  constructor() {}

  addToFavorites(item: any) {
    this.isItemAvailable = this.favItems.find((fav) => fav.id === item.id);
    if (this.isItemAvailable) {
      window.alert('This film is already in your favorites');
    } else {
      this.favItems.push(item);
      window.alert('This film has been added to the favorites!');
    }
  }

  getFavItems() {
    return this.favItems;
  }

  clearFavorites() {
    this.favItems = [];
    return this.favItems;
  }
}
