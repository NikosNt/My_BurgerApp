import React, {Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
//import  * as actions from '../../store/actions/indexActions'
import { connect } from 'react-redux'


class Checkout extends Component {

    // componentDidMount(){
    //     this.props.onInitPurchase()
    // }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () =>{
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        let summary = <Redirect to="/"/>
        
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null ;
            summary=(<div>
                            {purchasedRedirect}
                           <CheckoutSummary ingredients={this.props.ings}
                                 checkoutCancelled={this.checkoutCancelledHandler}
                                 checkoutContinued={this.checkoutContinuedHandler}
                            />
                            <Route  path={this.props.match.path + '/contact-data'} 
                                    component={ContactData}/>
                    </div>                
                    )
        }

        return summary;
      
    }


}

const mapStateToProps = state => {
    return{
         ings:state.burgerBuilderReducer.ingredients,
         purchased:state.orderReducer.purchased
    };
};



// const mapDispatchToProps = dispatch => {
//     return {
//          onInitPurchase: () => dispatch(actions.purchaseInit())
//     };
// };
 


export default connect(mapStateToProps)(Checkout);
