import React from 'react';
import classes from './Order.css'

const order = (props)=> {

    const ingredients =  [];
    for(let ingredientName in props.ingredients){
        ingredients.push({
            name:ingredientName ,
            amount :props.ingredients[ingredientName]
        })
    }

    const ingredientOutput =ingredients.map(ig => {
        return <span key={ig.name}
                     style={{textTransform: 'capitalize',
                             display:"inline-block",
                             margin:'0 8px',
                             border: '1px solid #ccc',
                             padding:'5px'
                            }}
                         >{ig.name} ({ig.amount})      
                </span>;
    })

    const info = [];
    for(let infos in props.orderData){
        info.push({
            name:infos ,
            prop :props.orderData[infos]
        })
    }
    const infotOutput =info.map(ig => {
        return <span key={ig.name}
                     style={{//textTransform: 'capitalize',
                             display:"inline-block",
                             margin:'0 8px',
                             border: '1px solid #ccc',
                             padding:'5px'
                            }}
                         >{ig.name} : {ig.prop}
                </span>;
    })

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
            <p>Information:- {infotOutput}</p>
        </div>
    );


}






export default order;


