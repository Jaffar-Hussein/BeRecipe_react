import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Recipe from './components/ Recipe';
import { Routes, Route } from "react-router-dom";
import CategoryDetails from './components/categoryDetail';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import SignUp from './components/Signup';
import Login from './components/login';

function App() {
  return (
    // <Home/>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path={`/meal/:category`} element={<CategoryDetails />} />
        <Route path='/add' element={<AddRecipe />} />
        <Route path='/details/:id' element={<RecipeDetails />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </>
  );
}

export default App;
