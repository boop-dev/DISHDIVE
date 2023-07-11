import './App.css';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import DDAppBar from './DDAppBar';
import Footer from './Footer';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
import CustomerReviewCard from './CustomerReviewCard';
import { customerReviews } from './CustomerReviews';

// consts
const recipeCategories = ["Vegan", "Gluten-free", "Desserts", "Keto", "Mediterranean", "Low-carb", "Pescatarian", "Vegetarian"]

//KFWLCM20

function Home() {
  return (
    <>
    {/* App Bar */}
      <DDAppBar props={{bgColor: '#425F57'}} />

      {/* Top Box */}
      <Box sx={{
        padding: '5%',
        }}>
        

        <Grid container sx={{marginTop: '5%'}}>

          <Grid item xs={12} sm={5}>
            <Typography sx={{
            fontFamily: 'Raleway',
            fontSize:'350%',
            fontWeight: 700,
            color: "#425F57",
            textAlign: 'left',
            paddingY: '1%'

          }}>
            Discover. Create. Dive into Flavor
          </Typography>

          <Typography component='h4' variant='h5' paragraph
            sx={{
              width: '65%',
              fontFamily: 'Raleway',
              textAlign: 'left',
              fontSize: '150%',
              fontWeight: 500
            }}>
            Get your hands on a vast collection of recipes from around the globe
            ranging from quick and easy meals to gourmet delights.
          </Typography>
          <Button variant='contained' href='/recipes' className='heroButton'
          sx={{
            color: 'white',
            outlineColor: '#425F57',
            marginY: '5%',
            fontSize: '150%',
            fontFamily: 'Raleway',
            borderColor: '#425F57',
            borderRadius: 2,
            padding: 2,
            backgroundColor: '#425F57',
            ":hover": {
              backgroundColor: '#324842',
              borderColor: '#425F57',
            }
          }}>
            Discover Recipes
          </Button>
          </Grid>

          <Grid item xs={12} sm={7} sx={{position: 'relative', }}>
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
              fontSize: '300%',
              fontWeight: 600,
              color: 'black'
            }}>
            Checkout these categories
          </Typography>
          <br />
          <br />
          <Grid container spacing={3}>
              {recipeCategories.map((category) => (
                  <Grid item xs={12} sm={3} className='griditem'>
                    <Link to={'/recipes'} style={{ textDecoration: 'none' }}>
                      <RecipeCard props={{title: category.toUpperCase(), imageUrl: 'images/' + category + '.jpg' }}/>
                    </Link>
                  </Grid>
              ))}
          </Grid>
        </Container>
      </Box>

      {/* Advantages section */}
      <Container sx={{ marginY: '6vh'}}>
        <Grid container spacing={6} justifyContent='flex-end'>
          <Grid item sm={6} xs={12} alignContent="center" > 
            <img src='images\pexels-sarah-chai-7262911.jpg' alt='advanImg1' className='AdvantageImg1'/>
          </Grid>

          <Grid item sm={6} xs={12} >
            <Typography sx={{
              fontFamily: 'Raleway',
              fontWeight: 'bold',
              fontSize: '300%',
              paddingTop: '5vh'
            }}>
              Curated and detailed recipes that suit your taste.
            </Typography>
          </Grid>

          <Grid item sm={6} xs={12} >
            <Typography sx={{
              fontFamily: 'Raleway',
              fontWeight: 'bold',
              fontSize: '300%',
              paddingTop: '10vh',
              textAlign: 'right'
            }}>
              Lots of variety to chooose from.
            </Typography>
          </Grid>

          <Grid item sm={6} xs={12} >
            <img src='images\pexels-vanessa-loring-5966431.jpg' alt='AdvanImg2' className='AdvantageImg2'/>
          </Grid>
        </Grid>
      </Container>

      {/* Customer Review Section */}
      <Typography sx={{
        fontFamily: 'Raleway',
        fontSize:'3.5vw',
        fontWeight: 700,
        color: "#000000",
        textAlign: 'center',
        paddingY: '2%'
      }}>
        People love Flavorea
      </Typography>

      <Container>
        <Grid container spacing={4}>
          {customerReviews.map((review) => (
            <CustomerReviewCard props={{
              name: review.name,
              rating: review.rating,
              title: review.title,
              description: review.description
            }} />
          ))}
        </Grid>
        
           
      </Container>

      {/* Footer */}
        <Footer />
    
    </>
  );
    
}

export default Home;
