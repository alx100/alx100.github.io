// function* generate() {
//     console.log('Start');
//     yield 1;
//     yield 2;
//     yield 3;
//     console.log('Finish');
// }

// function generate() {
//     let current = 1;
//     console.log('Start');
//     return {
//         [Symbol.iterator]() {
//             return {
//                 next() {
//                     let result = { value: undefined, done: true };

//                     if (current <= 3){
//                         result.value = current;
//                         result.done = false;
//                         current++;
//                     } else {
//                         result.value = undefined;
//                         result.done = true;
//                         console.log('Finish');
//                     }

//                     return result;
//                 }
//             }
//         }
//     }
// }


// console.log(typeof generate);
// let iterator = generate()[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//range with Generator

function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}


//range with Iterator

// function range2(start, end) {
//     let current = start;
    
//     return {
//         [Symbol.iterator](){
//             return {
//                 next() {
//                     let result = { value: undefined, done: true};
//                     if (current <= end) {
//                         result.value = current;
//                         result.done = false;
//                         current++;
//                     }
//                     return result;
//                 }
//             };
//         }
//     };

// }

for (let num of range(1, 10)) {
    console.log(num);
}

let numbers = {
    *range(start, end) {
        let current = start;
        while (current <= end) {
            yield current++;        
        }
    }
};

for (let num of numbers.range(1, 10)) {
    console.log(num);
}