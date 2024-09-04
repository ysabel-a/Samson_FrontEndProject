import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import MealList from './MealList'
import CalculateCalories from './CalculateCalories'
import './App.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MealPlanner />} />
        <Route path="/calculate-calories" element={<CalculateCalories />} />
      </Routes>
    </Router>
  );
}

function MealPlanner() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}


export default App
