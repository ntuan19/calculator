import React, {useState,useEffect} from 'react';

export default function TipCalculator() {
  // Write your code here.
  const[bill, setBill] = useState(50)
  const [tipPercentage,setTipPercentage] = useState(18)
  const [numberPeopleTip,setNumberPeopleTip] = useState(1)
  const [totalTip,setTotalTip] = useState(bill* tipPercentage/100)
  const [tipPerPerson,setTipPerPerson] = useState(totalTip/numberPeopleTip)

  // So the useEffect is used to reflect the changes only when there is change in bill, tipPercentage or number people tiped. 
  // in addition, useEffect has a function constHandleChanges that would handle changes from input. 
  useEffect(() => {
    const totalCalculatedTip = bill * tipPercentage/100
    setTotalTip(totalCalculatedTip)
    setTipPerPerson(totalCalculatedTip/numberPeopleTip)
  },[bill,tipPercentage,numberPeopleTip])

  const handleChanges = (e,setter) => { 
    setter(Number(e.target.value));
  }   
  return (
    <>
      <div >
        <label>
          Bill: 
          <input type="number" value={bill} onChange={(e) => handleChanges(e, setBill)} />
        </label>
        <label>
          Tip Percentage: 
          <input type="number" value={tipPercentage} onChange={(e) => handleChanges(e, setTipPercentage)} />
        </label>
        <label>
          Number of People: 
          <input type="number" value={numberPeopleTip} onChange={(e) => handleChanges(e, setNumberPeopleTip)} />
        </label>
      
      </div>
      <p className = 'p'>
         <p>Total Tip: {totalTip?`$${totalTip.toFixed(2)}` : '-'}</p>
         <p> Tip Per Person: {tipPerPerson? `$${tipPerPerson.toFixed(2)}` : '-'}</p>
      </p>
    </>
  );
}