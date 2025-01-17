
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocation Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense) => (
                        <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                    ))
                }
            </tbody>
        </table>
    );
};

export default ExpenseList