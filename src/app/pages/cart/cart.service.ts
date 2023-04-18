import { Product } from '../product/product';
import { Cart, LineItem } from './cart';

export class CartService {
  cart: Cart = new Cart();

  constructor() {}

  getCart() {
    return this.cart.lineItems;
  }

  addCart(product: Product, quantity: number) {
    const existedItem = this.cart.lineItems.find(
      (item) => item.product.id === product.id
    );

    if (existedItem) {
      existedItem.quantity += quantity;
    } else {
      const lineItem: LineItem = {
        product: product,
        quantity: quantity
      };
      this.cart.lineItems.push(lineItem);
    }
  }

  removeCart(product: Product) {
    const existedItem = this.cart.lineItems.find(
      (item) => item.product.id === product.id
    );

    if (existedItem) {
      this.cart.lineItems = this.cart.lineItems.filter(
        (item) => item.product.id !== product.id
      );
    }
  }

  getTotalPrice() {
    return this.cart.lineItems.reduce((sum, item: LineItem) => {
      return (
        sum +
        (item.product.price * item.quantity * (100 - item.product.discount)) /
          100
      );
    }, 0);
  }
}
