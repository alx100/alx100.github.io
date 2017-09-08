
export function token(state='',action){
    if(action.type === 'SET_TOKEN'){
        return action.token||'token'
    }
    return state;
}