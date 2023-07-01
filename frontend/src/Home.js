import './App.css';
import { Box, Container, Typography, Grid } from '@mui/material';
import DDAppBar from './DDAppBar';
import Footer from './Footer';
import RecipeCard from './RecipeCard';

// consts
const recipeCategories = ["Vegan", "Gluten-free", "Desserts", "Keto", "Mediteranean", "Low-carb", "Pescatarian", "Vegetarian"]



function Home() {
  return (
    <>
    
    {/* Top Box */}
      <Box className="topBox" 
        sx={{
          height: 700
        }}
      >
        <DDAppBar props={{bgColor: 'transparent'}} />
        <h1 className='mainH1'>Discover. Create. Dive into Flavor</h1>
        <Box sx={{
          width: 600,
          }}>
          <Typography component='h4' variant='h5' paragraph
            sx={{
              color: 'white',
              marginLeft: '25%',
              width: '70%',
              fontFamily: 'Josefin Sans',
              fontWeight: '400',
            }}>
            Get your hands on a vast collection of recipes from around the globe
            ranging from quick and easy meals to gourmet delights.
          </Typography>
          <div className='overlay'></div>
          </Box>
      </Box>


      {/* Middle Box */}
      <Box className='middleBox'>
        <Container>
          <Typography  variant='h4'
            sx={{
              textAlign: 'center',
              marginBottom: '50px',
              fontFamily: 'Josefin Sans',
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
                            <RecipeCard props={{title: category.toUpperCase(), imageUrl: 'images/' + category + '.jpg' }}/>
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
