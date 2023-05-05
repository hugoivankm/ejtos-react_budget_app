import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {currency, budget, dispatch} = useContext(AppContext);
  
  const changeBudget = (budget) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: budget,
    })
  };
  
  return (
    <div className='alert alert-secondary'>
        <div className='d-flex flex-row flex-nowrap'>
          Budget:{currency}
          <input 
          type="number"
          step="10"
          value={budget}
          onChange={(event => changeBudget(event.target.value))}
          />
        </div>
    </div>
  )
}

export default Budget;
