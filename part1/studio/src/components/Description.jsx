import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.maangchi.com/recipe/tteokbokki";
    let authorPhoto = "https://www.maangchi.com/wp-content/themes/maangchi4/img/header/maangchi-mascot.svg";
    let authorName = "Emily Kim, commonly known as Maangchi";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink} target='blank'>Recipe Blog Post</a> 
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
        <div> 
            <div>
                <h1>Hot and spicy rice cake: Tteokbokki 떡볶이</h1>
                <p>"Tteokbokki is chewy rice cakes cooked in a red, spicy broth. It’s a popular Korean street food."</p>
            </div>
            <RecipeAuthor />
        </div>
        );
    }
}

export default RecipeDescription;