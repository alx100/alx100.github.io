'use strict';

let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

// function getData(url, done) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = function() {
//         if (xhr.status ===200) {
//             let json = JSON.parse(xhr.response);
//             console.log(json);
//             done(json.Search);
//         } else {
//             console.error(xhr.statusText);
//         }
//     };

//     xhr.onerror = function(error) {
//         console.error(error);
//     };

//     xhr.send();
// }

// let search = 'spider man';

// getData(`http://www.omdbapi.com/?s=${search}`, function(movies) {
//     movies.forEach(function(movie){
//         addMovieToList(movie);
//     });
// });

// with Promises

function getData(url) {
    return new Promise(function(resolve, reject) {
           let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status ===200) {
                    let json = JSON.parse(xhr.response);
                    // console.log(json);
                    resolve(json.Search);
                } else {
                    reject(xhr.statusText);
                }
            };

            xhr.onerror = function(error) {
                reject(error);
            };

            xhr.send();
    });

 
}

let batman = getData(`http://www.omdbapi.com/?s=batman`);
let superman = getData(`http://www.omdbapi.com/?s=superman`);


Promise.race([batman, superman])
    .then(movies => 
        movies.forEach(movie => 
            addMovieToList(movie)))
    .catch(error => console.error(error));
    

// batman
//     .then(movies => 
//         movies.forEach(movie => 
//             addMovieToList(movie)))
//     .catch(error => console.error(error));


// superman
//      .then(movies => 
//         movies.forEach(movie => 
//             addMovieToList(movie)))
//     .catch(error => console.error(error));





// getData(`http://www.omdbapi.com/?s=${search}`)
//     .then(movies => 
//         movies.forEach(movie => 
//             addMovieToList(movie)))
//     .catch(error => console.error(error));


// function go(num) {
//     return new Promise(function(resolve,reject) {
//         let delay = Math.ceil(Math.random() * 3000);
//         console.log(num, delay);
//         setTimeout(() => {
//             if (delay > 2000)
//                 reject(num);
//             else
//                 resolve(num);
//         }, delay);
//     });
// }

// let p1 = go(1);
// let p2 = go(2);
// let p3 = go(3);

// Promise.race([p2, p1, p3]) 
//     .then(value => console.log(value))
//     .catch(error => console.error(error));
    