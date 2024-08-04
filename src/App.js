import Meal from "./Components/Meal";
import './Components/style.css';
import { Routes,Route } from "react-router-dom";
import Recipeinfo from "./Recipeinfo";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Meal />} />
    <Route path="/:MealId" element={<Recipeinfo />} />
    </Routes>
    </>
  );
}

export default App;
