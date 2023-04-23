import React, { useState } from 'react';
import '../styles/Bmr.css';

function Bmr() {
  // state
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmr, setBmr] = useState('');
  const [gender, setGender] = useState('');
  const [activity, setActivity] = useState(0);

  const calcBmr = (event) => {
    // prevent submitting
    event.preventDefault();
  
    if (age === 0 || weight === 0 || height === 0 || gender === '' || activity === '') {
      alert('Please enter a valid age, weight, height, gender, and activity level');
    } else {
      let bmr = 0;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === 'female') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
  
      // adjust bmr based on activity level
      if (activity === 'sedentary') {
        bmr *= 1.3;
      } else if (activity === 'lightly-active') {
        bmr *= 1.6;
      } else if (activity === 'moderately-active') {
        bmr *= 1.9;
      }
  
      setBmr(bmr.toFixed(1));
    }
  };
  

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMR Calculator</h2>
        <form onSubmit={calcBmr}>
          <div>
            <label>Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <label>Activity Level</label>
            <select
              name="activity"
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              required
            >
              <option value="">-- Select Activity Level --</option>
              <option value="sedentary">Sedentary</option>
              <option value="lightly-active">Lightly Active</option>
              <option value="moderately-active">Moderately Active</option>
            </select>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMR is: {bmr}</h3>
        </div>

        <div className="img-container">
          <img src="https://www.drawingskill.com/wp-content/uploads/11/Dumbbell-Drawing-Photo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Bmr;
