import React, { useState } from 'react';

function CalculateCalories() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [calories, setCalories] = useState(null);

  function calculateBMR() {
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    bmr = Math.ceil(bmr / 50) * 50;
    setCalories(Math.round(bmr));
  }

  return (
    <div className="calculate-calories-container">
      <h2 className="title">Calculate Your <br></br> Daily Calorie Needs</h2>
      <form onSubmit={(e) => { e.preventDefault(); calculateBMR(); }}>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            className="input-field"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            className="input-field"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            className="input-field"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sex:</label>
          <select
            className="select-field"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Calculate</button>
      </form>
      {calories && <h3 className="result">Your BMR is: {calories} calories/day</h3>}
    </div>
  );
}

export default CalculateCalories;
