class Produkt {
    constructor(nazwa, cena, ilosc) {
        this.nazwa = nazwa;
        this.cena = cena;
        this.ilosc = ilosc;
    }
}

class Cart {
    constructor() {
        this.products = []
    }

    addProduct(nazwa, cena, ilosc) {
        const nowy = new Produkt(nazwa, cena, ilosc);
        this.products = [...this.products, nowy]
    }
    removeProduct(nazwa) {
        this.products = products.filter(product => product[0] != nazwa)
    }
    showCart() {
        console.log("Zawartość koszyka:");
        this.products.forEach(product => {
            console.log(`${product.nazwa}, Cena: ${product.cena} zł, Ilość: ${product.ilosc}`);
        });
    }
}

let k = new Cart()
k.addProduct("Jabłko", 1.50, 124)
k.addProduct("Pies", 1200, 6)
k.addProduct("Lody", 5.72, 50)
k.showCart()