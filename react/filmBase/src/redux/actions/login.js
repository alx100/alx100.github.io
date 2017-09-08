export function login(user,pass){
    return dispatch=>{
        dispatch({type:'SEND_FETCH'})
        fetch('https://film-api-go.herokuapp.com/login',{
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({
                login:user,
                password:pass
            })
        })
        .then(response=>{ 
            response.json()
                .then(data=>{
                    if(response.status==200){
                        dispatch({type:'SET_TOKEN',token:data.token});
                        dispatch({type:'SET_LOGGED'});
                        document.getElementsByClassName('success')[0].innerHTML =
                     `Success!`
                    }
                    else document.getElementsByClassName('success')[0].innerHTML =
                     `Server eror ${response.status}: ${data.error}`
                    dispatch({type:'SEND_FETCH'})
                })
            })       
    }
}