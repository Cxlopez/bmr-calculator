import React from 'react';
import '../styles/Table.css';

export default function Table() {
  return (
    <div>
      <div className="table-container">
  <table>
    <caption>Lifestyle & Training</caption>
    <thead>
      <tr>
        <th>Level</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sedentary</td>
      </tr>
      <tr>
        <td>Lightly Active</td>
      </tr>
      <tr>
        <td>Moderately Active</td>
      </tr>
      <tr>
        <td>Highly Active</td>
      </tr>
    </tbody>
  </table>
  
  <table>
    <caption>Example</caption>
    <thead>
      <tr>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Works a desk job, very little activity outside of lifting</td>
      </tr>
      <tr>
        <td>Works a desk job, takes pet for walks most days in addition to lifting</td>
      </tr>
      <tr>
        <td>Works as a waitress, occasionally plays sports in addition to lifting</td>
      </tr>
      <tr>
        <td>Works as a construction worker, regular hiking in addition to lifting</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}
