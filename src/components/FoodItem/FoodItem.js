import React from 'react';
import './FoodItem.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Carb } from '../../assests/images/carb.svg';
import { ReactComponent as Fat } from '../../assests/images/fat.svg';
import { ReactComponent as Pro } from '../../assests/images/pro.svg';
import { ReactComponent as Cal } from '../../assests/images/cal.svg';
import { Box } from '@material-ui/core';



export default function FoodItem({ food }) {

  // console.log(food);
  return (


      <Card className='card'>
      <CardContent className='details'>
          <Typography className='details-top' component={'span'}>
              <Box className='name-container'fontWeight='fontWeightBold' textAlign='left'>{food.name}</Box>
              <Box className='cal-container' textAlign='right' ><SvgIcon><Cal /></SvgIcon>{food.cal}cal</Box>
          </Typography>
          <Typography className='details-bottom'component={'span'}>
              <Box className='ingredient-container' ><SvgIcon><Carb/></SvgIcon>{food.carb.toFixed(2)}g</Box>
              <Box className='ingredient-container'><SvgIcon><Fat/></SvgIcon>{food.fat.toFixed(2)}g</Box>
              <Box className='ingredient-container'><SvgIcon><Pro /></SvgIcon>{food.pro.toFixed(2)}g</Box>
          </Typography>
        </CardContent>
      </Card>
  
  )
}