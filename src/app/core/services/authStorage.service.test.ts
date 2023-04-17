import { AuthStorageService } from './authStorage.service';

const auth = new AuthStorageService();

describe('Local storage set item', () => {
  const setTokenMock = jest.spyOn(Storage.prototype, 'setItem');
  auth.setToken('aaa');
  it('Check setToken called', () => {
    expect(setTokenMock).toHaveBeenCalled();
  });
  it('Check setToken arguments', () => {
    expect(setTokenMock).toHaveBeenCalledWith('token', 'aaa');
  });
});

describe('Local storage get item', () => {
  const getTokenMock = jest.spyOn(Storage.prototype, 'getItem');
  auth.getToken();
  it('Check getToken called', () => {
    expect(getTokenMock).toHaveBeenCalled();
  });
  it('Check removeToken arguments', () => {
    expect(getTokenMock).toHaveBeenCalledWith('token');
  });
});

describe('Local storage remove item', () => {
  const removeTokenMock = jest.spyOn(Storage.prototype, 'removeItem');
  auth.removeToken();
  it('Check removeToken called', () => {
    expect(removeTokenMock).toHaveBeenCalled();
  });
  it('Check removeToken arguments', () => {
    expect(removeTokenMock).toHaveBeenCalledWith('token');
  });
});
