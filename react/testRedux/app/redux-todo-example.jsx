var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '', 
    showCompleted: false, 
    todos: []
}

var reducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
}
};

var store = redux.createStore(reducer, redux.compose(
     window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes
store.subscribe(() => {
    var state = store.getState();

    // console.log('Search text is', state.searchText)
    document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState',  store.getState());


var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Get'
};

store.dispatch(action);

// console.log('Search text should be', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Find'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Something'
});