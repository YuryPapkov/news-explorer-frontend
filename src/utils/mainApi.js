const MY_API_URL = 'https://papkov-news.students.nomoreparties.xyz/api';

const register = ({ email, password, name }) => {
  console.log('main');
  return fetch(`${MY_API_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res);
      }
    })
}

const login = ({ email, password }) => {
  return fetch(`${MY_API_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка  ${res.status}`)
      }
    })
}

const checkToken = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return fetch(`${MY_API_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }

    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(`Ошибка  ${res.status}`)
        }
      })
  } else {
    return Promise.reject(`Ошибка: пользователь не авторизован `)
  }

}

export {
  register,
  login,
  checkToken
}