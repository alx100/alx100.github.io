import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Interval Timer & Range

// const source$ = Rx.Observable.interval(100)
//   .take(5);

// source$.subscribe(
//   x => { 
//     console.log(x);
//   },
//   err => { 
//     console.log(err);
//   },
//   complete => { 
//     console.log('Completed');
//   }
// )

// const source$ = Rx.Observable.timer(1000, 1000)
//   .take(5);

// source$.subscribe(
//   x => { 
//     console.log(x);
//   },
//   err => { 
//     console.log(err);
//   },
//   complete => { 
//     console.log('Completed');
//   }
// )

const source$ = Rx.Observable.range(0, 5)
  .take(5);

source$.subscribe(
  x => { 
    console.log(x);
  },
  err => { 
    console.log(err);
  },
  complete => { 
    console.log('Completed');
  }
)