import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   const movies = ["wash car", "laundry", "meal prep", "LaunchCode assignments"];
   return (
      <div>
         <h4 className = {classes.choresHeading}>Today's Chores</h4>
         <ul>
            <li className={classes.choresText}>{movies[0]}</li>
            <li className={classes.choresText}>{movies[1]}</li>
            <li className={classes.choresText}>{movies[2]}</li>
            <li className={classes.choresText}>{movies[3]}</li>
         </ul>
      </div>
   );
}