interface Delivery {
    date: Date
}

class HomeDelivery implements Delivery {
    date: Date

    constructor(public address: string) {
    }
}

class ShopDelivery implements Delivery{
    constructor(public date = new Date()) {
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery

class Product {
    constructor(public id: string | number, public name: string, public price: number) {
    }
}

class Cart {
    private products: Product[] = []
    private delivery: DeliveryOptions

    addProduct(product: Product): void {
        this.products.push(product)
    }

    deleteProduct(productId: string | number): void {
        this.products = this.products.filter(({id}) => id !== productId)
    }

    getTotalPrice(): number {
        return this.products.reduce((acc, val) => acc += val['price'], 0)
    }

    setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery
    }

    checkout(): {success: boolean} | never {
        if (this.products.length === 0) throw new Error('No products added!')
        if (!this.delivery) throw new Error('Delivery is not set!')
        return {success: true}
    }

}

const cart = new Cart()

cart.addProduct(new Product(1, 'Shirt', 20))
cart.addProduct(new Product(2, 'Shoes', 40))
cart.addProduct(new Product(3, 'Socks', 10))
cart.deleteProduct(2)
console.log(cart.getTotalPrice())
cart.setDelivery(new HomeDelivery('Some Address'))
console.log(cart.checkout())
