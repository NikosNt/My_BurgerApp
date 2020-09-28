import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import clasess from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component {

    state={
        name: '',
        email: '',
        address:{
            street: '',
            postalCode:''
        },
        loading:false
    }


    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true});

        // alert('You continue !');
        const order = {
           ingredients: this.props.ingredients,
           price:this.props.price,
           costumer:{
               name: 'Nikos N',
               address:{
                   street:'Teststreet 1',
                   zipcode:'41351',
                   country:'Greece'
               },
               email: 'test@test.com'
           },
           deliveryMethod:'fastest'
       }

        axios.post('/orders.json',order)
                .then(response => {
                    this.setState({ loading:false});
                    this.props.history.push('/')
                })
                .then(error =>{
                    this.setState({ loading:false}); 
                });
    }

    render(){

        let form = (
                <form>
                    <input className={clasess.Input} type="text" name="name" placeholder="Your Name"/>
                    <input className={clasess.Input} type="email" name="name" placeholder="Your Email"/>
                    <input className={clasess.Input} type="text" name="street" placeholder="Your Street"/>
                    <input className={clasess.Input} type="text" name="postalCode" placeholder="Your Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}> ORDER</Button>
                </form>

        );
        if(this.state.loading){
            form = <Spinner/>
        }

        return(
            <div className={clasess.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}

            </div>
        )
    }

}



export default ContactData;



