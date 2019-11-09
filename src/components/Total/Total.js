import React,{useState} from 'react';
import './Total.css';


const DrawerContents = ({toggleDrawer}) => (
  <div className="DrawerContents__Container">
    <h1>Hello</h1>
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
    <button onClick={toggleDrawer}>Toggle Drawer</button>
    <DrawerContents />
  </div>
    </div>
  </div>
  );

}