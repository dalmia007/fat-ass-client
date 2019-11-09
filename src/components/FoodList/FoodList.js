import React from 'react';
import './FoodList.css';
import FoodItem from '../FoodItem/FoodItem';
import ScrollToBottom from 'react-scroll-to-bottom';

export default function FoodList({ foodList }) {
  
  return (
    <ScrollToBottom  className='list'>
      {foodList.map(food => <FoodItem key={food.id} food={food} />)}
      {/* <FoodItem  food={{ cal: 94, carb: 25.13420000, fat: 0.3094, id: "1573233376433&food_a1gb9ubb72c7snbuxr3weagwv0dd", name: "1 apple", pro: 0.4732}}/> */}
    </ScrollToBottom>
  )
}
