import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

function getAnimal (){
  const animals = ['bird','cat','cow','dog','gator','horse'];
  return animals[Math.floor(Math.random()*animals.length)]
}

function App() {
   const [animals,setAnimals] = useState([]);

   const handleClick = () => {
    setAnimals([...animals,getAnimal()])
   };

   const renderedAnimals = animals.map((animal,index)=>{
     return <AnimalShow type={animal} key={index}/>
   })
   return (
      <div>
         <button onClick={handleClick}>Add Animal</button>
         <div>{renderedAnimals}</div>
      </div>
   );
}
export default App;
