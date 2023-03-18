import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  console.log("expiration Duration LOG", duration);
  return duration;
  
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  console.log("LOG TOKEN VALUE FROM LOCAL", token);

  if (!token) {
    console.log("token not found LOG");
    return null;
    
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    console.log("token Expired LOG");
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();
console.log("LOG TOKEN", token);
  if (!token) {
    return redirect('/auth');
  }
  else return token;
}
