import { create } from 'apisauce'
const MY_API_URL = 'https://papkov-news.students.nomoreparties.xyz/api';

const api = create({
  baseURL: MY_API_URL,
  headers: { "Content-Type": "application/json" },
});

const register = ({ email, password, name }) => {
  return api.post('/signup', { email: email, password: password, name: name })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.data;
      } else {
        console.log(res.data);
        return Promise.reject(res.data);
      }
    })
}

const login = ({ email, password }) => {
  return api.post('/signin', { email: email, password: password })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.data;
      } else {
        console.log(res.data);
        return Promise.reject(res.data);
      }
    })
}

const checkToken = (token) => {
  if (token) {
    return api.get('/users/me', {}, { headers: { "Authorization": `Bearer ${token}` } })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          console.log(res.data)
          return res.data
        } else {
          return Promise.reject(res.data)
        }
      })
  } else {
    return Promise.reject(`Ошибка: пользователь не авторизован `)
  }

}
const getArticles = ((token) => {
  return api.get('/articles', {}, { headers: { "Authorization": `Bearer ${token}` } })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        console.log(res.data)
        return res.data
      } else {
        return Promise.reject(res.data)
      }
    })
})

// добавление статьи
const addArticle = ((token, card) => {
  return api.post('/articles', card, { headers: { "Authorization": `Bearer ${token}` } })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        console.log(res.data)
        return res.data
      } else {
        return Promise.reject(res.data)
      }
    })
})

//удаление статьи
const deleteArticle = ((token, card) => {
  return api.delete(`/articles/${card._id}`, card, { headers: { "Authorization": `Bearer ${token}` } })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        console.log(res.data)
        return res.data
      } else {
        return Promise.reject(res.data)
      }
    })
})

export {
  register,
  login,
  checkToken,
  getArticles,
  addArticle,
  deleteArticle
}