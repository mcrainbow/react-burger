const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export { checkResponse, request };
