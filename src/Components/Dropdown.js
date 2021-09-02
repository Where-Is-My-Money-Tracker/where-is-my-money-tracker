import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Dropdown extends Component {
    
    render() { 

        return ( 
            <div className="dropdown">
                <details>
                    <summary>Actions</summary>
                        <div className='links'>
                            <NavLink to='/addpurchaseitem'>Add New Expense</NavLink> 
                            <NavLink to='/addrecurringpurchaseitem'>Add Recurring Expense</NavLink>
                            <NavLink to='/modifyrecurringpurchaseitem'>Modify Recurring Expense</NavLink>
                            <NavLink to='/deletepurchases'>Delete a Purchase</NavLink>
                        </div>
                </details>
            </div>
         );
    }
}
 
export default Dropdown;