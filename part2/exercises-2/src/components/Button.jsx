import './styles.css';

function Button() {
   const onLearnMore = () => {
               alert("Slipsh Splash");
            }
   //or
   // function onLearnMore(){
   //    alert("Splish Splash!");
   // }; 

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;