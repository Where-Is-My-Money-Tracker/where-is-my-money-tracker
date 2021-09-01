import { Component } from 'react';
// import { getPurchases } from '../fetch-utils.js';
import AddPurchaseItem from './AddPurchaseItemForm.js';

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
                <AddPurchaseItem></AddPurchaseItem>
            </>
         );
    }
}
 
export default User;

