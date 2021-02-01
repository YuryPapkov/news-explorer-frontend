const BASE_URL = 'https://newsapi.org/v2/everything';
const apiKey = '36e7fde1bf074e27bcf1ee76483048e3';

export default function search(keyWord) {
  const today = (new Date()).toISOString();
  const sevenDaysAgoInMilSec = Date.now() - (1000 * 3600 * 24 * 7);
  const sevenDaysAgo = (new Date(sevenDaysAgoInMilSec)).toISOString();


  return fetch(`${BASE_URL}?q=${keyWord}&from=${sevenDaysAgo}&to=${today}&pageSize=24&apiKey=${apiKey}`, {
    method: 'GET',
    headers: {
      "Content-Type": "text/plain",
    },

  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка  ${res.status}`)
      }
    })
};
