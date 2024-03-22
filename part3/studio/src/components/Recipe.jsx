import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://divascancook.com/classic-lemon-bars-recipe/#recipe";
   let authorPhoto = "https://divascancook.com/wp-content/uploads/2022/07/about-sm.jpg";
   let authorName = "Monique Kilgore";

   return (
      <div>
         <img src={authorPhoto} alt ={authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['1/2 cup unsalted butter, softened (do not melt)', '¼ teaspoon vanilla extract', '¼ teaspoon lemon extract', '½ teaspoon lemon zest', '1 cup all-purpose flour'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Classic Lemon Bars</h1>
            <p>"Creamy, sweet & tart lemon filling on top of a lemon shortbread cookie crust. Garnished with powdered sugar and lemon zest! A pure classic!"</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://divascancook.com/wp-content/uploads/2020/04/IMG_7928-1456x1213.jpg" alt="Classic Lemon Bars" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
