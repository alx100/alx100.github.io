let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

// let js, php, py, rb;
// [js, php, py, rb] = languages;


// let [js, php, py, rb] = languages;

let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, py, rb); 

let scores = [3, 4, 5];

// let [low, , high] = scores;

// console.log(low, high);

// let [low, ...rest] = scores;

// console.log(low, rest);

// let [low, mid, high, highest = 7] = scores;

// console.log(low, mid, high, highest);

let scores2 = [3, 4, [5,6]];

// let [low, mid, [high, higher]] = scores2;
// console.log(low, mid, high, higher);


function computeScore([low, mid]) {
    console.log(low, mid);
}
// computeScore([3, 4]);


function getScores() {
    return [3, 4, 5];
}

let scores3 = getScores();
console.log(scores3);
let [low, mid, high] = getScores();
console.log(low, mid, high);


let yes = 'Yes';
let no = 'No';

// console.log(yes);

[yes, no] = [no, yes];
console.log('Yes is', yes);
console.log('No is', no);