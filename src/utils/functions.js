import { jwtDecode } from 'jwt-decode';

const checkResponse = async (response) => {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {}
    throw new Error(errorMessage);
  }
  return response.json();
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (name, value, options) => {
  options = {
    path: '/',
    ...options,
  };
  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }
  document.cookie = updatedCookie;
};

const isUserAuthenticated = (user) => {
  if (user.name === '' && user.email === '') {
    return false;
  }
  return true;
};

function isTokenExpired(token) {
  if (token === '' || token === undefined) {
    return true;
  }
  const now = new Date();
  const expirationDate = jwtDecode(token.split(' ')[1]).exp * 1000;
  if (expirationDate - now.getTime() > 0) {
    return false;
  } else {
    return true;
  }
}

function tokenExists(token) {
  if (token === '' || token === undefined) {
    return false;
  }
  return true;
}

export {
  checkResponse,
  request,
  getCookie,
  setCookie,
  isUserAuthenticated,
  isTokenExpired,
  tokenExists,
};
