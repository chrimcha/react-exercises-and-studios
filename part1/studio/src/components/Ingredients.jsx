import React from 'react';
import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["1 pound of cylinder shaped rice cake (tteok)", "7 large size dried anchovies", "6 x 8 inch dried kelp", "⅓ cup hot pepper paste (gochujang)", "1 tablespoon Korean hot pepper flakes (gochugaru)"];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}