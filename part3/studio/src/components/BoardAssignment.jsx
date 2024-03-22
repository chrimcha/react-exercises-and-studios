import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setBoardName] = useState('no boards yet!');

   const boards = [
      {
         id: 1,
         label: 'desserts',
         name: "desserts"
      },
      {
         id: 2,
         label: 'citrus',
         name: "citrus"
      },
      {
         id: 3,
         label: 'summer',
         name: "summer"
      }
   ];

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) =>{
            return (
               <option key={board.id} value={board.name}>{board.label}</option>
            )
         } )}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
