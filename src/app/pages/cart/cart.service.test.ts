import { Product } from '../product/product';
import { CartService } from './cart.service';

const avocado: Product = {
  id: 1,
  name: 'avocado',
  price: 100,
  discount: 5
};
const apple: Product = {
  id: 2,
  name: 'apple',
  price: 200,
  discount: 10
};

describe('Cart', () => {
  const cart = new CartService();

  describe('Get product from cart', () => {
    const mockGetCart = jest.spyOn(CartService.prototype, 'getCart');
    cart.getCart();
    it('Get cart called', () => {
      expect(mockGetCart).toHaveBeenCalled();
    });
    it('Get cart data', () => {
      expect(mockGetCart).toHaveLength(0);
    });
  });

  describe('Add product to cart', () => {
    const mockAddCart = jest.spyOn(CartService.prototype, 'addCart');
    cart.addCart(avocado, 2);
    cart.addCart(apple, 5);

    it('Add product called', () => {
      expect(mockAddCart).toHaveBeenCalled();
      expect(mockAddCart).toHaveBeenCalledWith(avocado, 2);
      expect(mockAddCart).toHaveBeenCalledWith(apple, 5);
    });

    it('Get number product in cart', () => {
      expect(cart.getCart()).toHaveLength(2);
    });
  });

  describe('Remove 1 product from cart', () => {
    const mockRemoveCart = jest.spyOn(CartService.prototype, 'removeCart');
    beforeAll(() => {
      cart.removeCart(avocado);
    });
    it('Remove product called', () => {
      expect(mockRemoveCart).toHaveBeenCalled();
      expect(mockRemoveCart).toHaveBeenCalledWith(avocado);
    });

    it('Get number product in cart after remove', () => {
      expect(cart.getCart()).toHaveLength(1);
    });
  });

  describe('Remove all product from cart', () => {
    const mockRemoveCart = jest.spyOn(CartService.prototype, 'removeCart');
    beforeAll(() => {
      cart.removeCart(avocado);
      cart.removeCart(apple);
    });
    it('Remove product called', () => {
      expect(mockRemoveCart).toHaveBeenCalled();
      expect(mockRemoveCart).toHaveBeenCalledWith(avocado);
      expect(mockRemoveCart).toHaveBeenCalledWith(apple);
    });

    it('Get number product in cart after remove', () => {
      expect(cart.getCart()).toHaveLength(0);
    });
  });

  describe('Get total in cart', () => {
    const mockGetTotalPrice = jest.spyOn(
      CartService.prototype,
      'getTotalPrice'
    );
    beforeAll(() => {
      cart.addCart(apple, 2);
      cart.getTotalPrice();
    });

    it('getTotalPrice called', () => {
      expect(mockGetTotalPrice).toHaveBeenCalled();
    });

    it('getTotalPrice vluae', () => {
      expect(cart.getTotalPrice()).toEqual(360);
    });
  });
});
