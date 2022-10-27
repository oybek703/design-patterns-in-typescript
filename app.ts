class Delivery {
    date: Date
    address?: string
    shopId: string

    constructor(date: Date, address?: string, shopId?: string) {
        this.date = date
        if (address) {
            this.address = address
        }
        if (shopId) {
            this.shopId = shopId
        }
    }
}

class Product {
    id: string
    name: string
    price: number
}

class Cart {
    products: Product[]
    delivery: Delivery

    addProduct(product: Product) {
        this.products.push(product)
    }

    deleteProduct(productId: string) {
        this.products = this.products.filter(({id}) => id == productId)
    }

    totalCost() {
        return this.products.reduce((acc, val) => acc += val['price'], 0)
    }

    addDelivery(delivery: Delivery) {
        this.delivery = new Delivery(delivery.date, delivery.address, delivery.shopId)
        return this.delivery
    }

    checkout() {

    }

}
