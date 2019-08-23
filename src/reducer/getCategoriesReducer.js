import * as actionTypes from "../types";

const initState = {
    categories:[]
}

export const getCategoriesReducer = (state=initState, action) =>{

    switch (action.type){
     case actionTypes.GET_CATEGORIES:
         return {
             ...state,
             categories: action.payload.data.results
             
         }   
        }
return state;

}