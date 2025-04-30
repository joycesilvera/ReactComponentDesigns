import React from 'react';

export default function TipCalculator() {

  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);
  const totalTip = bill * tipPercentage * 0.01;
  const tipPerPerson = totalTip/people;

  return (
    <div>
      <label>Bill <input type="number" onChange={e => setBill(e.target.value)} value={bill}></input></label>
      <label>Tip Percentage <input type="number" onChange={e => setTipPercentage(e.target.value)}  value={tipPercentage}></input></label>
      <label>Number of People <input type="number" onChange={e => setPeople(e.target.value)} value={people}></input></label>
      <p>Total Tip: {(totalTip === 0 || isNaN(totalTip)) ? '-' : `$${totalTip.toFixed(2)}`}</p>
      <p>Tip Per Person: {(totalTip === 0 || isNaN(tipPerPerson)) ? '-': `$${tipPerPerson.toFixed(2)}`}</p>
    
    </div>
  );
}

