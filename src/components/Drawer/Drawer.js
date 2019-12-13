import React,{useState} from 'react';
import './Drawer.css';
import { ResponsivePie } from '@nivo/pie'

const MyResponsivePie = ({ total}) => (
  <ResponsivePie
    data={[{ "id": "Carbs (g)",
    "label": "Carbohydrate",
    "value": Number(total.carb.toFixed(1)),
      "color": "hsl(10, 70%, 50%)"
    },
      {
        "id": "Fat (g)",
    "label": "Fat",
    "value": Number(total.fat.toFixed(1)),
        "color": "hsl(206, 70%, 50%)"
      },
      {
        "id": "Protein (g)",
    "label": "Protein ",
    "value": Number(total.pro.toFixed(1)),
        "color": "hsl(206, 70%, 50%)"
      }
    ]}
      margin={{ top: 50, right: 80, bottom:150, left: 80 }}
      startAngle={-162}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={4}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor="none"
      radialLabel="value"
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#000"
      radialLabelsLinkOffset={1}
      radialLabelsLinkDiagonalLength={10}
      radialLabelsLinkHorizontalLength={10}
      radialLabelsLinkStrokeWidth={2}
      radialLabelsLinkColor={{ from: 'color' }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="none"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
          {
              anchor: 'top',
              direction: 'row',
              translateY: -30,
              translateX:5,
              itemWidth: 100,
              itemHeight: 30,
              itemTextColor: '#000',
              symbolSize: 30,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}
  />
)



const DrawerContents = ({total }) => (
  <div className="DrawerContents__Container">
    <h2 className='total-head'>Total Calories : {total.cal}</h2>
    <br />
    <br/>
  </div>
);



export default function Total({ total }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
  <div className='total'> 
    <div className="App__Container">
      <div className={`Drawer-Container ${isOpen && "Drawer-Container-isOpen"}`}>
        <button onClick={toggleDrawer} className='emoji'><span role='img' aria-label="sheep"  > ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ </span></button>
        <DrawerContents total={total}></DrawerContents>
        <div className='chart'> <MyResponsivePie total={total}></MyResponsivePie></div>
      </div>
    </div>
  </div>
  );

}