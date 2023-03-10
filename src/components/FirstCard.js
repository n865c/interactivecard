import * as React from 'react';
import '../App.css';

 export default function FirstCard() {

  return (
<>
<div className='container'>
     <div className='sub-container'>   
     </div>
     <div className='sub-container2'>
      <fom className="card-form">
        <label for="CARDHOLDER NAME">CARDHOLDER NAME</label>
        <br/>
    <input
    type="text"placeholder='e.g.Jane Appleseed'/><br/>
     <label for="CARD NUMBER">CARD NUMBER</label>
        <br/>
    <input
    type="text"placeholder='e.g.1234 5678 9123 0000'/><br/>
    <label>EXP. DATE(MM/YY)</label><label>CVC</label><br/>
    <input type="text" placeholder='DD'/>
    <input type="text" placeholder='YY'/> 
    <input type="text" placeholder='e.g.123'/><br/>
    <button>Continue</button>
    </fom>
     </div>
     </div>
</>
  );
}
