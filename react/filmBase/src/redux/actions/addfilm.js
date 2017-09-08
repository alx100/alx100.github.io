export function addFilm(name,year,genres){
    return (dispatch,state)=>{
        dispatch({type:'SEND_FETCH'})
        fetch('https://film-api-go.herokuapp.com/api/v1/film',
        {
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8',"Authorization": `Bearer ${state().token}`},
            body:JSON.stringify({
                name,
                year,
                genres
            })
        })
        .then(response=>{
            response.json().then(data=>{
                if(response.status==200)
                document.getElementsByClassName('add-result')[0].innerHTML = 'Done!'
                dispatch({type:'SEND_FETCH'})
            })
        })
    }   
}