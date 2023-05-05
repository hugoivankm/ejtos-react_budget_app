import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function ChangeAllocation() {
    const [department, setDepartment] = useState("");
    const [action, setAction] = useState("add");
    const [amount, setAmount] = useState(0);

    const { expenses, currency, dispatch } = useContext(AppContext);

    const handleAllocation = (event) => {
        event.preventDefault();
        
        const allocationItem = {
            name: department,
            cost: parseInt(amount),
        }

        if(!Boolean(allocationItem.name) || allocationItem.quantity <= 0){
            return;
        }

        if (action === "reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: allocationItem,
            });
        } else if (action === "add") {
            dispatch({
                type: "ADD_EXPENSE",
                payload: allocationItem,
            });
        } else {
            return;
        }
    };

    const handleChange = (event) => {
        const value = event.target.value.replace(/^[^0-9]+$/g, "");
        if(value >= 0){
        setAmount(value)
        }
    };

    return (
        <form className="d-flex justify-content-between mt-3 px-4 w-75" onSubmit={(event) => handleAllocation(event)}>
            <div className='d-inline-flex mr-4 border border-secondary align-items-center rounded'>
                <label className="sr-only" htmlFor="departmentFormInput">Department:</label>
                <select
                    className="form-control"
                    name='Department'
                    id='departmentFormInput'
                    value={department}
                    onChange={event => setDepartment(event.target.value)}
                >
                    <option id="choose" value="choose">Choose...</option>
                    {expenses.map((expense) => {
                        return (<option key={expense.id} value={expense.name}>{expense.name}</option>);
                    })}
                </select>
            </div>

            <div className='d-inline-flex mr-4 border border-secondary  align-items-center rounded' >
                <label className='sr-only' htmlFor="actionFromInput">Allocation:</label>
                <select
                    className="form-control"
                    name='actionFromInput'
                    id='actionFromInput'
                    value={action}
                    onChange={event => setAction(event.target.value)}
                >
                    <option id="add" value="add">Add</option>
                    <option id="reduce" value="reduce">Reduce</option>
                </select>
            </div>

            <div className='d-inline-flex align-items-center  mr-4'>
                <label className="sr-only" htmlFor="amountFormInput">{currency}</label>
                <input
                    type="number"
                    id='amountFormInput'
                    value={amount}
                    onChange={(event) => handleChange(event)}
                />
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
}

export default ChangeAllocation;