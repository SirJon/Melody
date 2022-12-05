export function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }
  return fetch(url, {
    method: method,
    headers: headers,
  }).then(response => {
    return response.json()
  })
};