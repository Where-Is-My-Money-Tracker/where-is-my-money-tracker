import { Component } from 'react';
import { getPurchases } from '../fetch-utils.js';

class User extends Component {
    state = { 
        parentCategory: 0,
        childCategories: [],
        timeWindow: 0 
    }
    componentDidMount = async() => {
    getPurchases();
}
    render() { 
        return ( 
            <>
                <h1>Welcome to user</h1>
            </>
         );
    }
}
 
export default User;

