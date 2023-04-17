import { AuthStorageService } from './authStorage.service';

describe('Set local storage item', () => {
  const auth = new AuthStorageService();

  it('Check setToken', () => {
    const setTokenMock = jest.spyOn(Storage.prototype, 'setItem');
    auth.setToken('aaa');
    expect(setTokenMock).toHaveBeenCalled();
    expect(setTokenMock).toHaveBeenCalledWith('token', 'aaa');
  });

  it('Check getToken', () => {
    const getTokenMock = jest.spyOn(Storage.prototype, 'getItem');
    auth.getToken();
    expect(getTokenMock).toHaveBeenCalled();
    expect(getTokenMock).toHaveBeenCalledWith('token');
  });
  it('Check removeToken', () => {
    const removeTokenMock = jest.spyOn(Storage.prototype, 'removeItem');
    auth.removeToken();
    expect(removeTokenMock).toHaveBeenCalled();
    expect(removeTokenMock).toHaveBeenCalledWith('token');
  });
});
