import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary' ;
import Burger from  '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import { connect } from 'react-redux'
import * as actions from '../../store/actions/indexActions'


class BurgerBuilder extends Component {

    state = {
        purchasing:false,
    }

    componentDidMount(){
       // console.log(this.props);
        this.props.onInitIngredients();
    }

    updatePurchaseaState(ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
       return sum > 0;
    }



    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({purchasing:true});
        }else{
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
        
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');

    }

    render() {
        const disabledInfo ={
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<= 0
        }

        let orderSummary= null;

        let burger =this.props.error ? <p>Ingredients cant be loaded</p> : <Spinner/> ;

        if(this.props.ings !== null){
            burger = (<React.Fragment>
                            <Burger ingredients ={this.props.ings}/>
                            <BuildControls ingredientAdded={this.props.onIngredientAdded}
                                        ingredientRemoved={this.props.onIngredientRemoved}
                                        disabled={disabledInfo} 
                                        purchaseable={this.updatePurchaseaState(this.props.ings)}
                                        ordered={this.purchaseHandler}
                                        isAuth={this.props.isAuthenticated}
                                        price={this.props.price} /> 
                        </React.Fragment> );

            orderSummary = <OrderSummary   ingredients={this.props.ings}
                            purchaseCanceled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                            price={this.props.price} />;
        }

        // if(this.state.loading ){
        //     orderSummary = <Spinner />
        // }

        return(
            <Aux >
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    {orderSummary}
                </Modal>
                    {burger}
            </Aux>
        );
    }

}

const mapStateToProps = state => {
    return{
         ings:state.burgerBuilderReducer.ingredients,
         price:state.burgerBuilderReducer.totalPrice,
         error:state.burgerBuilderReducer.error,
         isAuthenticated:state.authReducer.token !==null,

    
        };
};



const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedierctPath(path))
    };
};
 

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,axios));