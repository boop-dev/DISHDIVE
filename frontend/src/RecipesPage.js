
import DDAppBar from './DDAppBar';
import { Container } from '@mui/material';
import './App.css';
import Recipe from './Recipe';
import Footer from './Footer';

const recipeCategories = ["Vegan", "Gluten-free", "Desserts", "Keto", "Mediterranean", "Low-carb", "Pescatarian", "Vegetarian"]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function RecipesPage ({ props }) {
    let recipes = [];
    if(props.category === 'random'){
        recipes = shuffleArray(recipeCategories);   
        console.log(recipes);    
    }else{
        recipes.push(props.category.replace("-", " "))
    }
    console.log(recipes)

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