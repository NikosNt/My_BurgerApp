// import * as actionTypes from '../actions/actionTypes'

// const initialState = {
//     orders: [],
//     loading:false,
//     purchased: false
// };

// const reducer = (state = initialState,action) => {
    
//     switch(action.type){
//         case actionTypes.PURCHASE_BURGER_START:
//             return{
//                 ...state,
//                 loading:true
//             }
//         case actionTypes.PURCHASE_BURGER_SUCCESS:
//             const newOrder ={
//                 ...action.orderData,
//                 id:action.orderId,
                
//             }
//             return{
//                 ...state,
//                 loading:false,
//                 purchased:true,
//                 orders:state.orders.concat(newOrder)   
//             }
//         case actionTypes.PURCHASE_BURGER_FAIL:
//             return{
//                 ...state,
//                 loading:false, 
//             }
//         case actionTypes.PURCHASE_INIT:
//             return{
//                 ...state,
//                 purchased:false
//             }
//         case actionTypes.FETCH_ORDER_START:
//             return{
//                 ...state,
//                 loading:true, 
//             }
//         case actionTypes.FETCH_ORDER_SUCCESS:
//             return{
//                 ...state,
//                 orders:action.orders,
//                 loading:false, 
//             }
//         case actionTypes.FETCH_ORDER_FAIL:   
//             return{
//                 ...state,
//                 loading:false, 
//         }
//         default:
//             return state;

//     }



// };

// export default reducer;



import * as actionTypes from '../actions/actionTypes'
import {updatedObject} from './../utility'

const initialState = {
    orders: [],
    loading:false,
    purchased: false
};


//updatedObject(state,{})

const reducer = (state = initialState,action) => {
    
    switch(action.type){//oti ekana kai sto burger builder reducer
        case actionTypes.PURCHASE_BURGER_START:
            return updatedObject(state,{ loading:true })
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updatedObject(action.orderData,{id:action.orderId})
            updatedObject(state,{ loading:false,
                                  purchased:true,
                                  orders:state.orders.concat(newOrder) })     
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updatedObject(state,{loading:false}) 
        case actionTypes.PURCHASE_INIT:
          return  updatedObject(state,{purchased:false})  
        case actionTypes.FETCH_ORDER_START:
            return  updatedObject(state,{loading:true })
        case actionTypes.FETCH_ORDER_SUCCESS:
            return  updatedObject(state,{orders:action.orders,loading:false})
        case actionTypes.FETCH_ORDER_FAIL:   
            return updatedObject(state,{ loading:false}) 
        default:
            return state;

    }



};

export default reducer;