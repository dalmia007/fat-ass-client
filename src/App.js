import React,{useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import FoodList from './components/FoodList/FoodList';
import Drawer from './components/Drawer/Drawer';
import { CircularProgress } from '@material-ui/core';




function App() {
  // const [cal, setCal] = useState('');
  // const [carb, setCarb] = useState('');
  // const [pro, setPro] = useState('');
  // const [fat, setFat] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [total, setTotal] = useState({ cal: 0, carb: 0, fat: 0, pro: 0 });
  const [loading, setLoading] = useState(false);
  const [slash, setSlash] = useState(true);

  const AppId = process.env.REACT_APP_APP_ID;
  const ApiKey = process.env.REACT_APP_API_KEY;

  setTimeout(() => setSlash(false)
    , 1250);

  async function startsearch(search) {
    setLoading(true);
    const response = await fetch(`https://api.edamam.com/api/food-database/parser?ingr=${search}&app_id=${AppId}&app_key=${ApiKey}`);
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
      name: search.toUpperCase(),
      cal: nutrients.calories,
      carb: nutrients.totalNutrients.CHOCDF.quantity,
      pro: nutrients.totalNutrients.PROCNT.quantity,
      fat: nutrients.totalNutrients.FAT.quantity
    } 
    
    setLoading(false)
    setFoodList(food => [...food, item])
    setTotal(total => ({
      cal: (total.cal + item.cal),
      carb: (total.carb + item.carb),
      pro: total.pro + item.pro,
      fat: total.fat + item.fat
    }));


    // console.log(total)
  };
  
  // const getTotal = () => {
  //   const total = foodList.reduce((acc, item)=> {
  //     return {
  //       cal: acc.cal + item.cal,
  //       carb: acc.carb + item.carb,
  //     }
  //   },
  //     { cal: 0, carb: 0 });
  //   return total;
  // };

  // console.log(total)
  return (
    <div>
      {
        slash 
        ? <div className='splashscreen'><img src={require('./assests/images/default.png')} className="splash" ></img></div>
        : <div className="App">
          <SearchBar startsearch={startsearch} />
          <FoodList foodList={foodList} loading={loading} />
          {/* <div className='overlay'>{loading && <CircularProgress className='spinner' />} </div> */}
          <div className='overlay'>{loading && <i>🍑</i>} </div>
          <Drawer foodList={foodList} total={total} />
        </div>
      }
    </div>
  );
}

export default App;
