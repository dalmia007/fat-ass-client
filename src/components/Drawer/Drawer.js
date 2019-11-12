import React,{useState} from 'react';
import './Drawer.css';
import Chartkick, { PieChart } from 'react-chartkick'
import 'chart.js'

Chartkick.options = {
  colors: ["#00b383", "#00805e", "#33ffc9"],
  
}
const DrawerContents = ({total }) => (
  <div className="DrawerContents__Container">
    <h2>Total Calories : {total.cal}</h2>
    <br />
    <br/>
    <div className='content'>
      {/* <h4>Total Carbs: {(total.carb).toFixed(2) + 'g'}</h4>
      <h4>Total Carbs: {(total.fat).toFixed(2) + 'g'}</h4>
      <h4>Total Carbs: {(total.pro).toFixed(2) + 'g'}</h4> */}
      <PieChart legend={false} dataset={{borderWidth: 0}} data={[["Carbs", total.carb.toFixed(2)], ["Fat",total.fat.toFixed(2)], ["Protien",total.pro.toFixed(2)]]} />
    </div>
  </div>
);



export default function Total({ total }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  
 //💪🌾🍟
  
 

  return (
  <div className='total'> 
    <div className="App__Container">
      <div className={`Drawer-Container ${isOpen && "Drawer-Container-isOpen"}`}>
        <button onClick={toggleDrawer} className='emoji'><span role='img' aria-label="sheep"  > ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ </span></button>
        <DrawerContents total={total}></DrawerContents>
    </div>
    </div>
  </div>
  );

}