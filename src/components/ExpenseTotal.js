
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const {currency, remaining, budget} = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Spent so far:{currency}{budget - remaining}</span>
        </div>
    )
}

export default ExpenseTotal