import decode from 'jwt-decode';

class AuthService {
  /*loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }*/

  login(idToken) {
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();