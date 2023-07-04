
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipesPage from './RecipesPage';
import Blog from './Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage props={{category: 'random'}} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipes/vegan" element={<RecipesPage props={{category: 'vegan'}}/>} />
        <Route path="/recipes/keto" element={<RecipesPage props={{category: 'keto'}}/>} />
        <Route path="/recipes/lowCarb" element={<RecipesPage props={{category: 'lowCarb'}}/>} />
        <Route path="/recipes/vegetarian" element={<RecipesPage props={{category: 'vegetarian'}}/>} />
        <Route path="/recipes/pescatarian" element={<RecipesPage props={{category: 'pescatarian'}}/>} />
        <Route path="/recipes/mediteranean" element={<RecipesPage props={{category: 'mediteranean'}}/>} />
        <Route path="/recipes/desserts" element={<RecipesPage props={{category: 'desserts'}}/>} />
        <Route path="/recipes/glutenFree" element={<RecipesPage props={{category: 'glutenFree'}}/>} />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App;
