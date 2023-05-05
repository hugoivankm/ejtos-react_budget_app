import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle  } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const {currency, dispatch} = useContext(AppContext);

    const handleDeleteItem = (name) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: name,
        });
    };

    const handleChangeBy10 = (action) => {
        const allocationItem = {
            name: props.name,
            cost: 10,
        }

        if (action === "add"){
            dispatch({
                type: 'ADD_EXPENSE',
                payload: allocationItem,
            });
        } else if (action === "reduce"){
            dispatch({
                type: 'RED_EXPENSE',
                payload: allocationItem,
            });

        } else {
            return;
        }
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency }{props.cost}</td>
            <td><FaPlusCircle size='2.1em' color="green" onClick={() => handleChangeBy10("add")} ></FaPlusCircle></td>
            <td><FaMinusCircle size='2.1em' color="red" onClick={() => handleChangeBy10("reduce")}></FaMinusCircle></td>
            <td><FaTimesCircle size='1.1em' color="black" onClick={() => handleDeleteItem(props.name)} ></FaTimesCircle></td>     
        </tr>
    );
};

export default ExpenseItem;