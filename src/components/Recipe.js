import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,url}) => {

     

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <span>Ingredients:</span>
            <ol>
                {ingredients.map(ingredients=>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <a href={url}>Find Your Recipe Here</a>
            <p><strong>Calories:</strong>{Math.round(calories)} gms</p>
        </div>
    )
}
export default Recipe;