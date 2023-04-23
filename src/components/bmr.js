import React, { useState } from 'react'
import '../styles/Bmr.css'

function Bmr() {
  // state
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(0);
  const [bmr, setBmr] = useState('');
  const [message, setMessage] = useState('');

  let imgSrce = '';

  let calcBmr = (event) => {
    //prevent submitting
    event.preventDefault();

    if (weight === 0) {
      alert('Please enter weight')
    } else if (height === 0) {
      alert('Please enter height')
    } else if (age === 0) {
      alert('Please enter age')
    } else {
      let bmr = (10 * weight + 6.25 * height + 5 * age + 5);
      setBmr(bmr.toFixed(1));
    }
  }


  return (
    <div className='bmr'>
      <div className='container'>
        <h2 className='center'>BMR Calculator</h2>
        <from onSubmit={calcBmr}>
          {/* <div>
            <label>Gender</label>
            <select name="Gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div> */}
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)}/>
          </div>
          <div>
            <label>Age</label>
            <input value={age} onChange={(event) => setAge(event.target.value)}/>
          </div>
          {/* <div>
            <label>Activity Level</label>
            <select name="Gender" id="gender">
              <option value={activity} >Sedentary + Training 3-6x/wk</option>
              <option value={activity} >Light Active + Training 3-6x/wk</option>
              <option value={activity} >Moderatley Active + Training 3-6x/wk</option>
              <option value={activity} >Highly Active + Training 3-6x/wk</option>
            </select>
          </div> */}
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit'>Submit</button>
          </div>
        </from>
        <div className='center'>
          <h3>Your BMR is: {bmr}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src="{imgSrc}" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Bmr;