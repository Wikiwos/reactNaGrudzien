class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Cart {
    constructor() {
        this.products = []
    }

    addProduct(name, price, quantity) {
        const newProduct = new Product(name, price, quantity);
        this.products = [...this.products, newProduct]
    }
    removeProduct(name) {
        this.products = products.filter(product => product[0] != name)
    }
    showCart() {
        console.log("Zawartość koszyka:");
        this.products.forEach(product => {
            console.log(`${product.name}, Cena: ${product.price} zł, Ilość: ${product.quantity}`);
        });
    }
}

let k = new Cart()
k.addProduct("Jabłko", 1.50, 124)
k.addProduct("Pies", 1200, 6)
k.addProduct("Lody", 5.72, 50)
k.showCart()