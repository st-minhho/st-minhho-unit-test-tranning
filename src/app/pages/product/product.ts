export type Discount = {
  percent: number;
  number: number;
};
export class Product {
  id: number;
  name: string;
  price: number;
  discount: Discount[];

  constructor(id: number, name: string, price: number, discount: Discount[]) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
}
