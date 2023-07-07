
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
        <Route path="/vegan" element={<RecipesPage props={{category: 'vegan'}}/>} />
        <Route path="/keto" element={<RecipesPage props={{category: 'keto'}}/>} />
        <Route path="/low-carb" element={<RecipesPage props={{category: 'low-carb'}}/>} />
        <Route path="/vegetarian" element={<RecipesPage props={{category: 'vegetarian'}}/>} />
        <Route path="/pescatarian" element={<RecipesPage props={{category: 'pescatarian'}}/>} />
        <Route path="/mediteranean" element={<RecipesPage props={{category: 'mediteranean'}}/>} />
        <Route path="/desserts" element={<RecipesPage props={{category: 'desserts'}}/>} />
        <Route path="/gluten-free" element={<RecipesPage props={{category: 'gluten'}}/>} />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App;
