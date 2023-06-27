
import DDAppBar from './DDAppBar';
import { Container } from '@mui/material';
import './App.css';
import Recipe from './Recipe';

export default function RecipesPage () {
    return(
        <>
            <DDAppBar props={{bgColor: 'black'}} />
            <Container>
                <Recipe props={{title: 'Mac and Cheese'}} />   
            </Container>
        </>
    )
}