import React,{useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import FoodList from './components/FoodList/FoodList';
import Total from './components/Total/Total'

function App() {
  // const [cal, setCal] = useState('');
  // const [carb, setCarb] = useState('');
  // const [pro, setPro] = useState('');
  // const [fat, setFat] = useState('');
  const [foodList, setFoodList] = useState([]);

  

  async function startsearch(search) {
    const response = await fetch(`https://api.edamam.com/api/food-database/parser?ingr=${search}&app_id=4d127922&app_key=0d07a6a8588557d7032106d19a8b9190`);
    let initial = await response.json();
    // console.log(initial.parsed[0]);
    let quantity = initial.parsed[0].quantity;
    let foodId = initial.parsed[0].food.foodId;
    let measureURI = initial.parsed[0].measure.uri;
    let foodnormal = {
      ingredients: [{ quantity: quantity, measureURI: measureURI, foodId: foodId }]
    }
    
    const nutrients = await fetch(`https://api.edamam.com/api/food-database/nutrients?app_id=4d127922&app_key=0d07a6a8588557d7032106d19a8b9190`, {
      method: 'POST',
      body: JSON.stringify(foodnormal),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .catch(error => console.error(error));
    // setCal(nutrients.calories);
    // setCarb(nutrients.totalNutrients.CHOCDF.quantity);
    // setPro(nutrients.totalNutrients.PROCNT.quantity);
    // setFat(nutrients.totalNutrients.FAT.quantity); 
    const item = {
      id: Date.now() + '&' + foodId,
      name: search,
      cal: nutrients.calories,
      carb: nutrients.totalNutrients.CHOCDF.quantity,
      pro: nutrients.totalNutrients.PROCNT.quantity,
      fat: nutrients.totalNutrients.FAT.quantity
    }
  
    setFoodList(food => [...food, item]);
  };

  
  return (
    <div className="App">
      <SearchBar startsearch={startsearch}/>
      <FoodList foodList={foodList} height='80vh' />
      <Total foodList={foodList}/>
    </div>
  );
}

export default App;
