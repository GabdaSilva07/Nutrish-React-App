    import axios from 'axios'

    const instance = axios.create({
        //baseURL: "https://api.spoonacular.com/recipes/"
        baseURL: "https://api.themoviedb.org/3/"
    })

    export default instance;