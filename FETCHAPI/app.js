//Fetch api is an interface for fetchinng (sending/recieving) resources
//It uses request and response object
//fetch() method is used to fetch a resource (data)
//let promise = fetch(url,.[options])
//api - application programing interface(nothing but end point)
const baseURL = "https://jsonplaceholder.typicode.com/posts";
const btn = document.querySelector('#btn');
// let promise = fetch(URL);
// console.log(promise);
const factpara = document.querySelector('#fact');

//get 1 id
// fetch(`${baseURL}/1`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//get all id
// fetch(`${baseURL}`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//post data
// fetch(`${baseURL}/1`, {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//          'Content-type': 'application/json; charset=UTF-8',
//        },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//put- edit
// fetch(`${baseURL}/1`, {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foot',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
 
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  //patch -edit
//   fetch(`${baseURL}/1`, {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'football',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//delete method
// fetch(`${baseURL}`, {
//   method: 'DELETE',
// });

//filter resource
// This will return all the posts that belong to the first user
// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//async await method
const getFacts = async () => {
    console.log("Getting data ....");
    let response = await fetch(`${baseURL}`);
    console.log(response); //json
    console.log(response.status);                 
    let data = await response.json();
    console.log(data);
    factpara.innerText = data[1].body;
};


//promise method 
// function getFacts() {
//     fetch(`${baseURL}`).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factpara.innerText = data[1].body;
//     });
// }

btn.addEventListener("click", getFacts)

//AJAX - asynchronous JS and SML
//JSON - Javascript object notation (also called AJAJ- aSynchronous javascript and json)
//json method - return second promise (input is JSON, output is JS objct)


//Response & Requests
// http verbs
//get,post,delete,patch,

//Response status code
//200 success, 404 if doesn't exist error, 500 server fai;ed error
//http reponse header contains additional information