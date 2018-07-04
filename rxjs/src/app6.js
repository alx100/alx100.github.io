import $ from 'jquery';
import Rx from 'rxjs/Rx';
import { take } from 'rxjs/operator/take';

// MAP & PLUCK


// const  source$ = Rx.Observable.interval(1000)
//     .take(10)
//     .map(v => v * v);

// source$.subscribe(v => console.log(v));

// const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
//   .map(v => v.toUpperCase())
//   .map(v => `I am ${v}`);

// source$.subscribe(v => console.log(v));

// function getUser(username){
//   return $.ajax({
//     url: `https://api.github.com/users/${username}`,
//     dataType: 'jsonp'
//   }).promise();
// }

// Rx.Observable.fromPromise(getUser('alx100'))
//   .map(user => user.data)
//   .subscribe(user => {
//     console.log(user);
//   });


const users = [
  {name:'Will', age: 34},
  {name:'Mike', age: 33},
  {name:'Paul', age: 35}
];

const users$ = Rx.Observable.from(users)
  .pluck('name');

users$.subscribe(x => console.log(x));