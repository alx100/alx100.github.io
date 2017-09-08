
export function films(state=[],action){
    switch(action.type){
        case 'UPDATE_FILMS':
        return action.result.map(item=>{
            item.inBasket=false
            return item
        })
        case 'CHANGE_IN_BASKET':
        return state.map(item=>{
            if(item.id===action.id)item.inBasket=!item.inBasket
            return item
        })
        default: return state;
    }

}