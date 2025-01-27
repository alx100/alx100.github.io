var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var usubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
         document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
    }
});
// usubscribe();


var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Alex'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Batman', 'Action'));
store.dispatch(actions.addMovie('Emmanuel', 'Erotic'));
store.dispatch(actions.removeMovie(1));


