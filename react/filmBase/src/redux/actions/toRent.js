export function toRent(id){
    return (dispatch,state)=>{
        console.log('state',state().token)
        dispatch({type:'SEND_FETCH'})
        fetch('https://film-api-go.herokuapp.com/api/v1/rent',
            {
                method:'post',
                headers:{"Content-type": `application/json; charset=utf-8;`,
                "Authorization": `Bearer ${state().token}`},
                body:JSON.stringify({film_id: id}), 
            })
        .then(response=>{
            response.json().then(data=>{
                document.getElementsByClassName('rent-result')[0].innerHTML = response.status+JSON.stringify(data);
                dispatch({type:'SEND_FETCH'})
            })
        })       
    }
}