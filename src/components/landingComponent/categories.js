import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect}from "react-redux"
import {getCategories} from "../../actions/category";
import "./styles/category.css"
class Categories extends Component {
    componentDidMount() {
        this.props.getCategories();
    }
    render() { 
        return ( 
            <div className="category-main-wrapper">
                <p>Categories</p>
                <div className="category-list-wrapper">
                {console.log(this.props.categories.categories)}
                {
                    this.props.categories.categories.map(category=>{
                        return <div className="category-card" key={category.id}>
                             <img src={category.background_image} />
                             <p>{category.name}</p>
                            </div>
                    })
                }
                </div>

            </div>
            
         );
    }
}

const mstp = (state)=>{
    return {
        categories: state.getCategoriesReducer //yha pe reducer he aata h na????
    }
}
const d = (dispatch)=>{
    return bindActionCreators({getCategories}, dispatch);
}
 
export default connect(mstp,d)(Categories);