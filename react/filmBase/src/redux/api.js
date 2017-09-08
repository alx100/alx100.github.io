export let Api = (function(){
    let fetchFilms = ()=>
    fetch('https://film-api-go.herokuapp.com/api/v1/film')
    .then(response=>{
        return response.json().then(data=>{
            return data
        })
    })
    return {
        fetchFilms
    }
}())