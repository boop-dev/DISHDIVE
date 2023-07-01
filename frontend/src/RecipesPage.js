
import DDAppBar from './DDAppBar';
import { Container } from '@mui/material';
import './App.css';
import Recipe from './Recipe';
import Grid from '@mui/material/Grid';
import Footer from './Footer';
import RecipeCard from './RecipeCard';


export default function RecipesPage () {

    return(
        <>
            <DDAppBar props={{bgColor: 'black'}} />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Recipe props={{title: 'egg'}} />   
            </Container>
            <Footer />
        </>
    )
}