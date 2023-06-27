import { Typography } from '@mui/material';
import React from 'react';

const RecipeCard = ({ title, imageUrl }) => {
  return (
    <Box>
      <img src={imageUrl} alt="recipe" />
      <Typography component='h4' variant='h5' paragraph
        sx={{
            fontFamily: 'Josefin Sans'
        }}>
        {title}
      </Typography>
    </Box>
  );
};

export default RecipeCard;
