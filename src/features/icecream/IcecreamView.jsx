import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from '../icecream/icecreamSlice';

const IcecreamView = () => {
    const [value, setvalue] = useState(0);
    const numOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams);
    const dispatch = useDispatch();

    const handleRestockCake = () => {
        dispatch(restocked(value));
        setvalue(0);
    }

    return (
        <div>
            <h5> No. of Icecreams - {numOfIcecreams} </h5>
            <button onClick={() => dispatch(ordered())}>Order Icecream</button>
            <input type='number' value={value} onChange={(e) => setvalue(parseInt(e.target.value))} />
            <button onClick={handleRestockCake}>Restock Icecreams</button>
        </div>
    )
}

export default IcecreamView;