import { Component } from 'react';
import PieChart from './Chart.js';
import { NavLink } from 'react-router-dom';
import { getPurchases, getCategories } from '../fetch-utils.js';

class User extends Component {
    state = { 
        parentCategory: 0,
        childCategories: [],
        timeWindow: 0,
        allPurchases: [],
        allCategories: [],
        filteredPurchases: [],
        filteredCategories: []
    }
    //TODO
    //write data munging functions to get everything ready for charts etc
    componentDidMount = async() => {
        const allPurchases = await getPurchases();
        const allCategories = await getCategories();
        this.setState({ allPurchases, allCategories})
    }
    render() { 
        return ( 
            <>
                <h1>Welcome to user</h1>
                <p>Add a new or recurring expense.</p>
                <p>Or, look at these expenses!</p>
                {/* <div>
                    {this.state.allPurchases.map((item)=> (
                        <div key={item.id}>
                            <p>{item.description} {item.cost}</p>
                        </div>
                    ))}
                </div> */}
                <PieChart />
                <NavLink to='/addpurchaseitem'>Add New Expense</NavLink> 
                <NavLink to='/addrecurringpurchaseitem'>Add Recurring Expense</NavLink>
                <NavLink to='/modifyrecurringpurchaseitem'>Modify Recurring Expense</NavLink>
                <NavLink to='/deletepurchases'>Delete a Purchase</NavLink>
            </>
         );
    }
}
 
export default User;

