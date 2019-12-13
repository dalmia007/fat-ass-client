import React from 'react';
import './FoodList.css';
import FoodItem from '../FoodItem/FoodItem';
import ScrollToBottom from 'react-scroll-to-bottom';
import SwipeToDelete from 'react-swipe-to-delete-component';



export default function FoodList({ foodList, onDelete }) {
  
  const list = foodList.map(food => <SwipeToDelete key={food.id} onDelete={()=>onDelete(food)}><FoodItem food={food} onDelete={()=>onDelete(food)}></FoodItem></SwipeToDelete>)
  
  
  return (
    <ScrollToBottom className='list'>
      {list}
    </ScrollToBottom>
  )
}
