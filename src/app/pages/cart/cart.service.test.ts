import { Product } from '../product/product';
import { CartService } from './cart.service';

const avocado: Product = {
  id: 1,
  name: 'avocado',
  price: 100,
  discount: [
    {
      percent: 5,
      number: 1
    },
    {
      percent: 10,
      number: 2
    },
    {
      percent: 20,
      number: 4
    }
  ]
};
const apple: Product = {
  id: 2,
  name: 'apple',
  price: 200,
  discount: [
    {
      percent: 5,
      number: 1
    },
    {
      percent: 10,
      number: 3
    }
  ]
};

describe('Cart', () => {
  describe('Get product from cart', () => {
    const cart = new CartService();

    it('Get cart data', () => {
      expect(cart.getCart()).toHaveLength(0);
    });
  });

  describe('Add product to cart', () => {
    const cart = new CartService();
    it('Get number product in cart', () => {
      cart.addCart(apple, 5);
      expect(cart.getCart()).toHaveLength(1);
      cart.addCart(avocado, 5);
      expect(cart.getCart()).toHaveLength(2);
      // expect(cart.cart.lineItems[0].product).toContain(apple);
    });
  });

  describe('Update product to cart', () => {
    const cart = new CartService();
    it('Get number product in cart', () => {
      cart.addCart(apple, 2);
      expect(cart.getCart()).toHaveLength(1);
      expect(cart.cart.lineItems[0].quantity).toBe(2);
      cart.updateCart(apple, 10);
      expect(cart.cart.lineItems[0].quantity).toBe(10);
    });
  });

  describe('Remove 1 product from cart', () => {
    const cart = new CartService();
    cart.addCart(avocado, 2);
    cart.addCart(apple, 5);
    cart.removeCart(avocado);
    it('Get number product in cart after remove', () => {
      expect(cart.getCart()).toHaveLength(1);
      expect(cart.cart.lineItems[0].quantity).toBe(5);
    });
  });

  describe('Remove all product from cart', () => {
    const cart = new CartService();
    cart.addCart(avocado, 2);
    cart.addCart(apple, 5);
    cart.removeCart(avocado);
    cart.removeCart(apple);

    it('Get number product in cart after remove', () => {
      expect(cart.getCart()).toHaveLength(0);
    });
  });

  describe('Get total in cart', () => {
    const cart = new CartService();
    cart.addCart(apple, 3);
    cart.getTotalPrice();
    it('getTotalPrice value', () => {
      expect(cart.getTotalPrice()).toEqual(540);
    });
    it('getTotalPrice value', () => {
      cart.addCart(avocado, 4);
      expect(cart.getTotalPrice()).toEqual(860);
    });
  });
});
