import { useEffect, useState } from 'react';
import { Typography, Card } from "@mui/material";
import axios from 'axios';

async function fetchData(title) {
  let returnArr = [];
  const options = {
    method: 'GET',
    url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    params: {
      query: title,
      offset: '99',
      limit: '99'
    },
    headers: {
      'X-RapidAPI-Key': 'e149f8f771msh13670b981967600p15bfa1jsna7a96a2a1df7',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    // Check if response.data is an array
    if (Array.isArray(response.data)) {
      returnArr = response.data.map((item) => ([
        item.title,
        item.ingredients,
        item.servings,
        item.instructions
      ]));
    }

    return returnArr;
  } catch (error) {
    console.error(error);
  }
}

export default function Recipe({ props }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const result = await fetchData(props.title); 
        setRecipes(result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRecipes();
  }, [props.title]);

  // console.log(recipes);

  return ( 
    <>
      {recipes.map((recipe, recipeIndex) => (
        <Card elevation={5} sx={{
          marginY:'30px',
          padding: "20px",
        }}>
          <div key={recipeIndex}>
            <Typography component='h4' variant='h5' paragraph sx={{ fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '30px' }}>
              {recipe[0]}
            </Typography>
            <Typography component='h5' variant='subtitle1' paragraph sx={{ fontFamily: 'Raleway', fontWeight: 'bold' }}>
              Ingredients: {recipe[1]}
            </Typography>
            <Typography component='h5' variant='subtitle1' paragraph sx={{ fontFamily: 'Raleway', fontWeight: 'bold'  }}>
              Servings: {recipe[2]}
            </Typography>
            <Typography component='h5' variant='subtitle1' paragraph sx={{ fontFamily: 'Raleway', fontWeight: 'bold'  }}>
              Instructions: {recipe[3]}
            </Typography>
          </div>
        </Card>
      ))}
    </>
  );
}
