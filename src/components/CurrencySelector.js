/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import '../index.css'


const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (currency) => {
        dispatch(
            {
                type: "CHG_CURRENCY",
                payload: currency,
            });
    };

    const currencyName = {
        "$": "$ Dollar",
        "€": "€ Euro",
        "£": "£ Pound",
        "₹": "₹ Rupee",
    };

    return (
        <div className='alert alert-secondary'>
            <Dropdown name='currency' >
                <Dropdown.Toggle className='currency-dropdown' variant="success" id="dropdown-basic">
                   {`Currency(${currencyName[currency] || "$ Dollar"})`}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item className='dropdown-item' onClick={() => handleCurrencyChange("$")} href="#">$ Dollar</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' onClick={() => handleCurrencyChange("£")} href="#">£ Pound</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' onClick={() => handleCurrencyChange("€")} href="#">€ Euro</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' onClick={() => handleCurrencyChange("₹")} href="#">₹ Rupee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default CurrencySelector;
