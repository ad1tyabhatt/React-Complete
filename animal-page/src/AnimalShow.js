import { useState } from 'react';
import './AnimalShow.css';
import bird from './img/bird.svg';
import cat from './img/cat.svg';
import cow from './img/cow.svg';
import dog from './img/dog.svg';
import gator from './img/gator.svg';
import heart from './img/heart.svg';
import horse from './img/horse.svg';

const svgMap = {
  bird, // similar to bird:bird
  cat,
  cow,
  dog,
  gator,
  horse
}

function AnimalShow({ type }) {
  const [clicks,setClicks] = useState(0)

  const handleClick = () =>{
    setClicks(clicks+1)
  }
   return <div className='animal-show' onClick={handleClick}>
   <img className='animal' src={svgMap[type]} alt="img" />
   <img className='heart' src={heart} alt="img heart" style={{width:10+10*clicks + 'px'
   }} />
   </div>;
}

export default AnimalShow;
