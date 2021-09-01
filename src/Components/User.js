import { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { getPurchases } from '../fetch-utils.js';
// import AddPurchaseItem from './AddPurchaseItemForm.js';

class User extends Component {
    state = { 
        parentCategory: 0,
        childCategories: [],
        timeWindow: 0 
    }
    componentDidMount = async() => {}
    render() { 
        return ( 
            <>
                <h1>Welcome to user</h1>
                <NavLink to='/addpurchaseitem'>Add New Expense</NavLink> 
                <NavLink to='/addrecurringpurchaseitem'>Add Recurring Expense</NavLink>

            </>
         );
    }
}
 
export default User;

