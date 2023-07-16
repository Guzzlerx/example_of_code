import { IUserDataSlice } from 'redux/userDataSlice/type';
import userDataSlice, { changeBaseURL, logout } from '../userDataSlice';

const user: IUserDataSlice = {
  accessToken: '123',
  refreshToken: '456',
  baseURL: 'test',
  error: '',
  isAuthenticated: true,
  isLoading: false,
};

describe('userDataSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = userDataSlice(user, { type: '' });

    expect(result.baseURL).toBe('test');
  });

  it('should return correct state using logout', () => {
    const action = { type: logout.type, payload: 'test' };

    const result = userDataSlice(user, action);

    expect(result.isAuthenticated).toBe(false);
    expect(result.accessToken).toBe('');
    expect(localStorage.getItem('accessToken')).toBe(null);
  });

  it('should change URL using changeBaseURL', () => {
    const action = { type: changeBaseURL.type, payload: 'newURL' };
    userDataSlice(user, action);
    expect(localStorage.getItem('baseURL')).toBe('newURL');
  });
});
