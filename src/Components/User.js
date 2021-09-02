import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getPurchases, getCategories } from '../fetch-utils.js';
import { findByParentId, mungeChartData, findById } from '../helper-functions.js';
import PieChart from './Chart.js';
import insertChartData from '../chart-api.js';

class User extends Component {
    state = { 
        optionSelector: '--',
        parentCategory: 0,
        childCategories: [],
        timeWindow: 31536000,
        allPurchases: [],
        allCategories: [],
        filteredPurchases: [],
        chartData: []
    }

    handleChange = async (e,key) => {
        this.setState({ [key]: e.target.value });
    }

    componentDidMount = async() => {
        const allPurchases = await getPurchases();
        const allCategories = await getCategories();
        this.setState({ allPurchases, allCategories})
        const childCategories = findByParentId(allCategories, this.state.parentCategory);
        this.setState({ childCategories });
        const chartData = mungeChartData(childCategories, allCategories, allPurchases);
        this.setState({ chartData });
    }

    handleCategoryChange = async (event) => {
        this.setState({ parentCategory: event.target.value });
        const childCategories = this.state.allCategories.filter(item => item.parent_id === Number(event.target.value));
        this.setState({ childCategories });
        const chartData = mungeChartData(childCategories, this.state.allCategories, this.state.allPurchases);
        this.setState({ chartData: chartData });
    }   

    handleGoBack = async () => {
        const parentId = findById(this.state.allCategories, Number(this.state.parentCategory)).parent_id;
        this.setState({ parentCategory: parentId });
        const childCategories = this.state.allCategories.filter(item => item.parent_id === parentId);
        this.setState({ childCategories });
        const chartData = mungeChartData(childCategories, this.state.allCategories, this.state.allPurchases);
        this.setState({ chartData: chartData });
    }

    render() { 
        return ( 
            <>
                <h1>Welcome to user</h1>
                <PieChart data={insertChartData(this.state.chartData)}/> 
                <label htmlFor='time window'>Time Window</label>
                <select 
                    name='time window' 
                    value={this.state.timeWindow}
                    onChange={(e) => this.handleChange(e, 'timeWindow')}
                >
                    <option value={31536000}>Year</option>
                    <option value={15768000}>6 Months</option>
                    <option value={7884000}>3 Months</option>
                    <option value={2628000}>Month</option>
                    <option value={604800}>Week</option>
                </select>
                <button onClick={this.handleGoBack}>Back</button>
                <select 
                        onChange={(e) => this.handleCategoryChange(e)}
                        value={this.state.optionSelector}
                    >
                        <option value='--'>--</option>
                        {this.state.childCategories.map( (cat) => (
                            <option
                                key={cat.id}
                                value={cat.id}
                            >{cat.description}</option>
                        ))};
                    </select>
                <p>Add a new or recurring expense.</p>
                {/* <p>Or, look at these expenses!</p>
                <div>
                    {this.state.allPurchases.map((item)=> (
                        <div key={item.id}>
                            <p>{item.description} {item.cost}</p>
                        </div>
                    ))}
                </div> */}
                <NavLink to='/addpurchaseitem'>Add New Expense</NavLink> 
                <NavLink to='/addrecurringpurchaseitem'>Add Recurring Expense</NavLink>
                <NavLink to='/modifyrecurringpurchaseitem'>Modify Recurring Expense</NavLink>
                <NavLink to='/deletepurchases'>Delete a Purchase</NavLink>
            </>
         );
    }
}
 
export default User;

