import './App.css';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import DDAppBar from './DDAppBar';
import Footer from './Footer';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';

// consts
const recipeCategories = ["Vegan", "Gluten-free", "Desserts", "Keto", "Mediterranean", "Low-carb", "Pescatarian", "Vegetarian"]



function Home() {
  return (
    <>
      <DDAppBar props={{bgColor: '#425F57'}} />
    {/* Top Box */}
      {/* <Box className="topBox">
        <h1 className='mainH1'>Discover. Create. Dive into Flavor</h1>
        <Box sx={{
          width: '60vh',
          }}>
          <Typography component='h4' variant='h5' paragraph
            sx={{
              color: 'white',
              marginLeft: '30%',
              width: '100%',
              fontFamily: 'Josefin Sans',
              fontWeight: '350',
              textAlign: 'left',
              fontSize: '195%'
            }}>
            Get your hands on a vast collection of recipes from around the globe
            ranging from quick and easy meals to gourmet delights.
          </Typography>
          <div className='overlay'></div>
        </Box>
          <Button variant='outlined' href='/recipes' className='heroButton'
          sx={{
            color: 'white',
            outlineColor: 'white',
            marginLeft: '65%',
            marginBottom: '5%',
            fontSize: '150%',
            fontFamily: 'Raleway',
            borderColor: 'white',
            padding: '.75%',
            ":hover": {
              backgroundColor: 'white',
              outlineColor: 'white',
              color: '#425F57',
              fontWeight: 'bold'
            }
          }}>
            Discover Recipes
          </Button>
      </Box> */}

      {/* Top Box */}
      <Box sx={{
        padding: '5%',
        }}>
        

        <Grid container sx={{marginTop: '5%'}}>

          <Grid item xs={5}>
            <Typography sx={{
            fontFamily: 'Rubik',
            fontStyle: 'medium',
            fontSize:'350%',
            color: "#425F57",
            textAlign: 'left'
          }}>
            Discover. Create. Dive into Flavor
          </Typography>

          <Typography component='h4' variant='h5' paragraph
            sx={{
              width: '65%',
              fontFamily: 'Raleway',
              fontWeight: '500%',
              textAlign: 'left',
              fontSize: '150%'
            }}>
            Get your hands on a vast collection of recipes from around the globe
            ranging from quick and easy meals to gourmet delights.
          </Typography>
          <Button variant='outlined' href='/recipes' className='heroButton'
          sx={{
            color: '#425F57',
            outlineColor: '#425F57',
            marginBottom: '5%',
            fontSize: '150%',
            fontFamily: 'Raleway',
            borderColor: '#425F57',
            padding: '.75%',
            ":hover": {
              backgroundColor: 'white',
              borderColor: '#425F57',
              color: '#425F57',
              fontWeight: 'bold',
            }
          }}>
            Discover Recipes
          </Button>
          </Grid>

          <Grid item xs={7} sx={{position: 'relative', }}>
            <img src='images\vecteezy_cooking-and-kitchen-illustration-concept-on-white-background_11634379.jpg' alt='hero-vector' className='heroImage' />
          </Grid>

        </Grid>

        

      </Box>

 
      {/* Middle Box */}
      <Box className='middleBox'>
        <Container>
          <Typography  variant='h4'
            sx={{
              textAlign: 'center',
              marginBottom: '50px',
              fontFamily: 'Raleway',
              fontWeight: '400',
              fontSize: '300%'
            }}>
            Checkout these categories
          </Typography>
          <br />
          <br />
          <Grid container spacing={3}>
              {recipeCategories.map((category) => (
                  <Grid item xs={3} className='griditem'>
                    <Link to={'/recipes'} style={{ textDecoration: 'none' }}>
                      <RecipeCard props={{title: category.toUpperCase(), imageUrl: 'images/' + category + '.jpg' }}/>
                    </Link>
                  </Grid>
              ))}
          </Grid>
        </Container>

      </Box>

      {/* Footer */}
        <Footer />
    
    </>
  );
    
}

export default Home;
