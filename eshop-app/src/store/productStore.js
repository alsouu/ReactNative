import { makeAutoObservable } from 'mobx';

const blacktshirt = require('../../assets/BlackT-Shirt.png');
const redsweater = require('../../assets/RedSweater.png');
const pinksweater = require('../../assets/PinkSweater.png');
const trousers = require('../../assets/GrayTrousers.png');
const pinktshirt = require('../../assets/PinkT-Shirt.png');
const redtrousers = require('../../assets/RedTrousers.png');

class ProductStore {
    products = [
        {
            id: '0',
            name: 'Футболка',
            price: 1200,
            count: 10,
            description: 'Футболка из органического хлопка, посвященный красоте морских экосистем.',
            img: blacktshirt,
            rating: 5,
            inCart: 0,
            isFavorite: false,
        },
        {
            id: '1',
            name: 'Свитер ',
            price: 2000,
            count: 5,
            description: 'Свитер из органического хлопка, посвященный красоте морских экосистем.',
            img: redsweater,
            rating: 4,
            inCart: 0,
            isFavorite: false,
        },
        {
            id: '2',
            name: 'Свитер',
            price: 2300,
            count: 1,
            description: 'Свитер из органического хлопка, посвященный красоте морских экосистем.',
            img: pinksweater,
            rating: 4,
            inCart: 0,
            isFavorite: false,
        },
        {
            id: '3',
            name: 'Брюки',
            price: 2500,
            count: 3,
            description: 'Классические брюки, можно сочетать с любой одеждой.',
            img: trousers,
            rating: 5,
            inCart: 0,
            isFavorite: false,
        },
        {
            id: '4',
            name: 'Футболка',
            price: 1200,
            count: 0,
            img: pinktshirt,
            description: 'Футболка из органического хлопка, посвященный красоте морских экосистем.',
            rating: 4,
            inCart: 0,
            isFavorite: false,
        },
        {
            id: '5',
            name: 'Брюки красные',
            price: 2999,
            count: 5,
            description: 'Классические брюки, отлично сочетается с белыми и черными вещами',
            img: redtrousers,
            rating: 4,
            inCart: 0,
            isFavorite: false,
        },
    ]

    addCartCount(id) {
        this.products = this.products.map(product => (product.id === id ? { ...product, inCart: product.inCart + 1 } : product))
    }

    removeCartCount(id) {
        this.products = this.products.map(product => (product.id === id ? { ...product, inCart: 0 } : product))
    }

    createFavorite(id) {
        this.products = this.products.map(product => (product.id === id ? { ...product, isFavorite: true } : product))
    }

    deleteFavorite(id) {
        this.products = this.products.map(product => (product.id === id ? { ...product, isFavorite: false } : product))
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new ProductStore();