import { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import AuthContext from './context';
import authStorage from './storage'

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  }

  return { user, login, logout };
};

export default useAuth;