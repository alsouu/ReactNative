import { makeAutoObservable } from 'mobx'

class CartStore {
  cart = [];

  constructor() {
    makeAutoObservable(this)
  }

  addToCart(product) {
    this.cart.push({ ...product, inCart: product.inCart + 1 })
  }

  deleteFromCart(id) {
    this.cart = this.cart.filter(product => product.id !== id)
  }

  addCartCount(id) {
    this.cart = this.cart.map(product => (product.id === id ? { ...product, inCart: product.inCart + 1 } : product))
  }

  removeCartCount(id) {
    this.cart = this.cart.map(product => (product.id === id ? { ...product, inCart: product.inCart - 1 } : product))
  }
}

export default new CartStore()