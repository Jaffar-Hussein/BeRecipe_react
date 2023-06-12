import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Recipe from './components/ Recipe';
import { Routes, Route } from "react-router-dom";
import CategoryDetails from './components/categoryDetail';

function App() {
  return (
    // <Home/>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path={`/meal/:category`} element={<CategoryDetails />} />
      </Routes>
    </>
  );
}

export default App;
