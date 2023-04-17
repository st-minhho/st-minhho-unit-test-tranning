import { AuthStorageService } from './authStorage.service';
import { AuthenService } from './authen.service';

const auth = new AuthenService();

describe('Logout remove token', () => {
  const removeTokenMock = jest.spyOn(
    AuthStorageService.prototype,
    'removeToken'
  );
  auth.logout();
  it('Logout called', () => {
    expect(removeTokenMock).toHaveBeenCalled();
  });
  it('Logout arguments', () => {
    expect(removeTokenMock).toHaveBeenCalledWith();
  });
});
