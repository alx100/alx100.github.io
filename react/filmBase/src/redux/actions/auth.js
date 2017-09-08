export function auth(obj_auth){
    return dispatch=>{
        dispatch({type:'SEND_FETCH'})
        fetch('https://film-api-go.herokuapp.com/auth',{
            method:'post',
             headers:{"Content-type": 'application/json; charset=utf-8'},
            body:JSON.stringify({
                    username: obj_auth.username,
                    password: obj_auth.password,
                    login: obj_auth.login,
                    age: obj_auth.age,
                    telephone: obj_auth.telephone
                })
        })
        .then(response=>{
            response.json().then(data=>{
                if(response.status!==200)
                document.getElementById('auth').innerHTML = data.error
                else document.getElementById('auth').innerHTML = "Succes! Try Login..."
                    dispatch({type:'SEND_FETCH'})
            })
        })       
    }
}