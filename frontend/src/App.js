
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipesPage from './RecipesPage';
import Blog from './Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App;
