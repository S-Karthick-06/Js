// fetch('./mock.json')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log('Users from mock.json:', data);
//   })

function createApi({
  title, body
}) {
  fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'POST',
    body: JSON.stringify({title, body})
  ,
    headers: {
      'Content-Type': 'application/json',
      hello : "abc",
  }}
)
  .then(res => res.json())
    .then(data => console.log(data));
}

createApi({title:"first",body:"time"})