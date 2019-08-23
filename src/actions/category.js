import * as actionTypes from "../types";
import { getCategoriesApi } from "../api/category";

export const getCategories = ()=>{
    const payload = getCategoriesApi();
    return {
        type: actionTypes.GET_CATEGORIES,
        payload
    }
}