import React from 'react';
//import { withRouter}from 'react-router-dom'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngerdient/BurgerIngredient'



const burger = (props)=> {
 // console.log(props);

  let transformedIngredients = Object.keys(props.ingredients)//kanw to obj array gia na xrhsimopoiw to map
      .map(igKey => {
          return [...Array(props.ingredients[igKey])].map((_, i)=>{
            return <BurgerIngredient key={igKey +i} type={igKey} />
          });
      })
      .reduce((arr,el) => {//An exoume 0 ulika etsi kanoume ena array apo arrays se keno 
        return arr.concat(el)
      }, []);
  
if(transformedIngredients.length === 0){
  transformedIngredients = <p>Please start adding ingredients !</p>
}

  return(
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
          {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>  
  );
    
};


export default burger;