import { Product } from '../product/product';

export type LineItem = {
  product: Product;
  quantity: number;
};

export class Cart {
  lineItems: LineItem[];

  constructor() {
    this.lineItems = [];
  }
}
