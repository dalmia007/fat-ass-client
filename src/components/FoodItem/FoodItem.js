import React,{} from 'react';
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
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';


export default function FoodItem({food, onDelete}) {
 
  return (
      <Card className='card'>
        <CardContent className='details'>
          <Typography className='details-top' component={'div'}>
              <Box className='name-container' textAlign='left'>{food.name}</Box>
              <button type="button"> 
            <DeleteIcon className='delete' fontSize="small" onClick={onDelete}/>
              </button>
          </Typography>
          <Typography className='details-bottom' component={'span'}>
              <Box className='ingredient-container' ><SvgIcon><Cal /></SvgIcon>&nbsp;{food.cal}cal</Box>
              <Box className='ingredient-container' ><SvgIcon><Carb/></SvgIcon>&nbsp;{food.carb.toFixed(0)}g</Box>
              <Box className='ingredient-container'><SvgIcon><Fat/></SvgIcon>&nbsp;{food.fat.toFixed(0)}g</Box>
              <Box className='ingredient-container'><SvgIcon><Pro /></SvgIcon>&nbsp;{food.pro.toFixed(0)}g</Box>
          </Typography>
        </CardContent>
      </Card>
  )
}