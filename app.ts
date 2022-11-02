abstract class DeliveryItem {
    items: DeliveryItem[] = []

    addItem(item: DeliveryItem) {
        this.items.push(item)
    }

    abstract getPrice(): number

    getPrices() {
        return this.items.reduce((previousValue, currentValue) => previousValue += currentValue.getPrice(), 0)
    }

}

class DeliveryShop extends DeliveryItem {

    constructor(private deliveryFee: number) {
        super()
    }

    getPrice(): number {
        return this.getPrices() + this.deliveryFee
    }
}

class Package extends DeliveryItem {

    getPrice(): number {
        return this.getPrices()
    }

}

class Product extends DeliveryItem {

    constructor(protected price: number) {
        super()
    }

    getPrice(): number {
        return this.price
    }
}

const shop = new DeliveryShop(100)
shop.addItem(new Product(20))
const pack1 = new Package()
pack1.addItem(new Product(15))
shop.addItem(pack1)
const product1 = new Product(200)
pack1.addItem(product1)
const pack2 = new Package()
pack1.addItem(new Product(400))
shop.addItem(pack2)
console.log(shop.getPrice())
