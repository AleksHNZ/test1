const controller = new AbortController()

function fetchData() {
  return fetch('http://jsonplaceholder.typicode.com/posts', {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .catch((e) => {
      console.log(e)
    })
}

fetchData()

// Если запрос еще не выполнился, то он будет прерван
// прерванный fetch вернет Promise с ошибкой
controller.abort()

const testFunc = (arr) => {
  let result = 0
  for(let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}