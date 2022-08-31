import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from '../cake/cakeSlice';

const CakeView = () => {
  const [value, setvalue] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  const handleRestockCake = () => {
    dispatch(restocked(value));
    setvalue(0);
  }
  return (
    <div>
      <h5> No. of Cakes - {numOfCakes} </h5>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <input type='number' value={value} onChange={(e) => setvalue(parseInt(e.target.value))} />
      <button onClick={handleRestockCake}>Restock Cakes</button>
    </div>
  )
}

export default CakeView