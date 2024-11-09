import React from 'react'
import Cards from './Cards'
import Button from './Loaders/Button';
import { BUTTONS } from '../utils/utils';
const CardContainer = () => {
    
  return (
   
        <div className="  grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        ">
        {BUTTONS.map((BTN, index) => (
          <Cards key={index}>
            <BTN/>
          </Cards>
        ))}
      </div>
  
  )
}

export default CardContainer
