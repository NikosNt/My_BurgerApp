import * as actionTypes from '../actions/actionTypes'
import {updatedObject} from '../utility'

const initialState = {
    ingredients :null,
    totalPrice: 4,
    error:false,
    building:false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}

const addIngredient = (state,action) => {
    const updatedIngredient ={ [action.ingredientName]:state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updatedObject(state.ingredients,updatedIngredient)
    const updatedState = {
        ingredients:updatedIngredients,
        totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updatedObject(state,updatedState)
}

const removeIngredient = (state,action) => {
    return{//to afhno etsi gia na dw tis diafores apla 8a eperna to panw kai 8a alaza to + me -
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName]:state.ingredients[action.ingredientName] - 1
        },
        totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
}

const fetchIngredientsFail = (state,action) => {
    return updatedObject(state,{error:true})
}


const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state,action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state,action);
        case actionTypes.SET_INGREDIENTS:
            return updatedObject(state,{//to afhnw etsi gia display apla bazo olo to periexomeno mesa se mia sinartisi
                                ingredients:{
                    salad:action.ingredients.salad,
                    bacon:action.ingredients.bacon,
                    cheese:action.ingredients.cheese,
                    meat:action.ingredients.meat,
                },
                totalPrice:4,
                error:false,
                building: false

            })
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            fetchIngredientsFail(state,action)
        default:
            return state;
    }
          
};

export default reducer;