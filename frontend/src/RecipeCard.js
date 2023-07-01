import { Typography, Card } from '@mui/material';
import React from 'react';
import "./App.css"

const RecipeCard = ({ props }) => {
  return (
    <Card className='recipecard' elevation={0} sx={{backgroundColor: 'transparent'}}>
      <img src={props.imageUrl} alt={props.title} className='recipeimage' />
      <Typography component='h4' variant='h5' paragraph
        sx={{
            fontFamily: 'Raleway',
            fontSize: '15%',
            color: 'black'
        }}>
        {props.title}
      </Typography>
    </Card>
  );
};

export default RecipeCard;
