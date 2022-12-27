import { makeAutoObservable } from 'mobx'

class FavoriteStore {
  favorites = []

  constructor() {
    makeAutoObservable(this)
  }

  createFavorite(product) {
    this.favorites.push(product)
  }

  deleteFavorite(id) {
    this.favorites = this.favorites.filter(product => product.id !== id)
  }
}

export default new FavoriteStore()