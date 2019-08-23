import Axios from "axios";

export const  getCategoriesApi = ()=>{

    return Axios.get("https://api.rawg.io/api/games");
    // return Axios.get("https://jsonplaceholder.typicode.com/posts");
    // return 1;

}