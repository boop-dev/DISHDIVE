
import DDAppBar from './DDAppBar';
import { Container } from '@mui/material';
import './App.css';
import Recipe from './Recipe';
// import Grid from '@mui/material/Grid';
import Footer from './Footer';
import recipesList from './recipesList';


export default function RecipesPage ({ props }) {
    

    // const recipeCategories = ["Vegan", "GlutenFree", "Desserts", "Keto", "Mediterranean", "LowCarb", "Pescatarian", "Vegetarian"]

    let recipes = [];
    if(props.category === 'random'){
        for(let i = 0; i < 8; i++){
            // for(let i = 0; i < 2; i++){
            //     recipes.push(recipe[Math.floor(Math.random() * recipe.length)]);
            // }
            // console.log(recipe)
            recipes.push(recipesList[i][Math.floor(Math.random() * recipesList[i].length)]);
            // console.log('rr' ,recipe);
            
        }console.log('recippes', recipes); console.log(recipesList);
    }else{
        for(let i = 0; i < 10; i++){
            recipes.push(recipesList[props.category][Math.floor(Math.random() * recipesList[props.category].length)]);
        }
    }
    return(
        <>
            <DDAppBar props={{bgColor: '#425F57'}} />
            <br />
            <br />
            <br />
            <br />
            <Container>
                {recipes.map((recipe) => (
                    <Recipe props={{title: recipe}} />
                ))}   
            </Container>
            <Footer />
        </>
    )
}