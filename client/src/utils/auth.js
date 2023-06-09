import decode from 'jwt-decode';

class AuthService {
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  setBusiness(idBus){
    return localStorage.setItem('id_bus', idBus)
  }
  
  getBusiness(){
    // console.log('id_bus:', localStorage.getItem('id_bus'))
    return localStorage.getItem('id_bus');
  }

  getToken() {
    return localStorage.getItem('id_token');
  }
  
  login(idToken) {
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('id_bus');
    window.location.assign('/');
  }
}

export default new AuthService();