import React from 'react'

function bmr() {
  return (
    <div>
      <div className='container'>
        <h2 className='center'>BMR Calculator</h2>
      </div>
      <from>
        <div>
          <label>Weight (lbs)</label>
          <input  value={weight}/>
        </div>
        <div>
          <label>Height (cm)</label>
          <input  value={height}/>
        </div>
        <div>
          <label>Age</label>
          <input  value={age}/>
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
  )
}

export default bmr