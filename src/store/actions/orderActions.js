import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';
//import { useImperativeHandle } from 'react';

export const purchaseBurgerSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = ( orderData, token ) => {
    // return dispatch => {
    //     dispatch( purchaseBurgerStart() );
    //     axios.post( '/orders.json?auth=' + token, orderData )
    //         .then( response => {
    //             //console.log( response.data );
    //             dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
    //         } )
    //         .catch( error => {
    //             dispatch( purchaseBurgerFail( error ) );
    //         } );
    // };
    return{
        type: actionTypes.PURCHASE_BURGER,
        orderData:orderData,
        token:token
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    };
};

export const fetchOrders = (token,userId) => {
    // return dispatch => {
    //     dispatch(fetchOrdersStart());
    //     const queryParams = '?auth='+ token + '&orderBy="userId"&equalTo="'+ userId + '"';
    //     axios.get( '/orders.json' + queryParams)
    //         .then( res => {
    //             const fetchedOrders = [];
    //             for ( let key in res.data ) {
    //                 fetchedOrders.push( {
    //                     ...res.data[key],
    //                     id: key
    //                 } );
    //             }
    //             dispatch(fetchOrdersSuccess(fetchedOrders));
    //         } )
    //         .catch( err => {
    //             dispatch(fetchOrdersFail(err));
    //         } );
    // };
    return{
        type: actionTypes.FETCH_ORDER,
        token:token,
        userId:userId
    }
};