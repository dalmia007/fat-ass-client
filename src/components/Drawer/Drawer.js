import React,{useState} from 'react';
import './Drawer.css';


const DrawerContents = ({toggleDrawer}) => (
  <div className="DrawerContents__Container">
    <h1>Total Calories</h1>
  </div>
);


export default function Total() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  
 //💪🌾🍟

  return (
    <div className='total'> 
    <div className="App__Container">
    <div className={`Drawer-Container ${isOpen && "Drawer-Container-isOpen"}`}>
    <button onClick={toggleDrawer} className='emoji'><span role='img' aria-label="sheep"  > ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ </span></button>
    <DrawerContents />
  </div>
    </div>
  </div>
  );

}