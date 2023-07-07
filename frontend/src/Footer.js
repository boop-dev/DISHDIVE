import './App.css';
import { Container, Grid, Typography, Box, Button } from '@mui/material';

const Footer = () => {
  // Define the data for the footer
  const description = "Explore, Discover, and Connect through Food. Our platform is your gateway to a world of culinary inspiration. Discover a vast collection of carefully curated recipes from around the globe. Connect with a community of food enthusiasts, share your own recipes, and embark on a delicious journey. Let DishDive be your guide as you explore the art of cooking, one dish at a time.";
  const title = "D I S H D I V E";

  const columns = [['Instagram', 'Facebook', 'Twitter'], ['Privacy policy', 'Terms and conditions']]

  return (
    <Box 
      sx={{
        backgroundColor: '#425F57',
        marginTop: 10,
        paddingTop: 10,
        // position: 'absolute',
        bottom: 0,
        }}>
      <Container maxWidth={false} sx={{ maxWidth: '85%'}}>

        {/* logo */}
        <Typography component='h3' variant='h5' 
          sx={{
            color: 'white',
            fontSize: '2vw',
            fontFamily: 'Raleway',
            }}>
          {title}
        </Typography>
        <br />
        <br />

        {/* Footer is divided into a grid with two gridItems. One for the about section and the other for the links */}
        <Grid container spacing={27} wrap='nowrap'>
          <Grid item xs={7}>
            <Typography item component='h4' variant='h5' paragraph 
              sx={{
                color: 'white',
                fontFamily: 'Raleway',
                textAlign: 'justify',
                fontSize: '125%'
              }}>
              {description}
            </Typography>
          </Grid>

          {/* Links section is a grid of two gridItems */}
          <Grid item>
            <Grid container spacing={0}>
              {columns.map((column) => (
                <Grid item xs={6}>
                {column.map((columnItem) => (
                  <Grid item xs={12} sx={{padding: '0px 20px 20px 20px'}}>
                      <Button variant='text'>
                        <Typography component='subtitle1'
                          sx={{
                            color: 'white',
                            fontFamily: 'Raleway'
                          }}>
                          {columnItem.toUpperCase()}
                        </Typography>
                      </Button>
                  </Grid>
                ))}
              </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Typography component='h5'
          sx={{
            textAlign:'center',
            color: 'white',
            fontSize: '18px'
          }}>
          DISHDIVE © 2023 | All rights reserved.
        </Typography>
        <br />
        <br />
      </Container>
    </Box>
  );

}

export default Footer;