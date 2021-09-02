import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getPurchases, getCategories, getRecurring } from '../fetch-utils.js';
import { findByParentId, mungeChartData, findById, normalizeCost } from '../helper-functions.js';
import PieChart from './Chart.js';
import insertChartData from '../chart-api.js';
import './User.css';

class User extends Component {
    state = { 
        optionSelector: '--',
        parentCategory: 0,
        childCategories: [],
        timeWindow: 31536000000,
        allPurchases: [],
        allCategories: [],
        chartData: []
    }

    handleChange = async (e,key) => {
        this.setState({ [key]: e.target.value });
        this.renderChart(this.state.parentCategory, e.target.value);
    }

    componentDidMount = async() => {
        const allPurchases = [...(await getPurchases()), ...(await getRecurring()) ];
        const allCategories = await getCategories();
        await this.setState({ allPurchases, allCategories})
        this.renderChart(this.state.parentCategory, this.state.timeWindow);
    }

    handleCategoryChange = async (e) => {
        this.renderChart(e.target.value, this.state.timeWindow);
    }   

    handleGoBack = async () => {
        const parentId = findById(this.state.allCategories, Number(this.state.parentCategory)).parent_id;
        this.renderChart(parentId, this.state.timeWindow);
    }

    renderChart = async (parentId, timeWindow) => {
        parentId = Number(parentId);
        timeWindow = Number(timeWindow);
        const childCategories = findByParentId(this.state.allCategories, parentId);
        await this.setState({ parentCategory: parentId, timeWindow, childCategories });
        const filteredPurchases = this.state.allPurchases.filter(item => {
            return item.timestamp ? (item.timestamp > (Date.now() - timeWindow)) 
            : item.stop_timestamp > Date.now() - timeWindow || item.stop_timestamp === null 
        });
        filteredPurchases.forEach(item => {
            if (item.start_timestamp) {
                item.normalizedCost = normalizeCost(
                    Number(item.start_timestamp), 
                    Number(item.stop_timestamp), 
                    Date.now(), 
                    timeWindow, 
                    item.frequency, 
                    Number(item.cost.slice(1)));
            } else {
                item.normalizedCost = item.cost;
            }
        })
        const chartData = mungeChartData(childCategories, this.state.allCategories, this.state.allPurchases);
        this.setState({ chartData });
    }

    render() { 
        return ( 
            <section className='userPage'>
                <div className='chartDiv'>
                    <article className='chart'>
                        <PieChart data={insertChartData(this.state.chartData)}/> 
                    </article>
                    <label htmlFor='time window'>Time Window</label>

                    <select className='chartSetting'
                        name='time window' 
                        value={this.state.timeWindow}
                        onChange={(e) => this.handleChange(e, 'timeWindow')}
                    >
                        <option value={31536000000}>Year</option>
                        <option value={15768000000}>6 Months</option>
                        <option value={7884000000}>3 Months</option>
                        <option value={2628000000}>Month</option>
                        <option value={604800000}>Week</option>
                    </select>

                    <button className='chartSetting' onClick={this.handleGoBack}>Back</button>
                    <select className='chartSetting'
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
                </div>
            <div className="dropdown">
                <details>
                    <summary>Add or Edit Purchases</summary>
                        <div className='purchaseLinks'>
                            <NavLink to='/addpurchaseitem'>Add New Purchase</NavLink> 
                            <NavLink to='/addrecurringpurchaseitem'>Add Recurring Purchase</NavLink>
                            <NavLink to='/modifyrecurringpurchaseitem'>Modify Recurring Purchase</NavLink>
                            <NavLink to='/deletepurchases'>Delete a Purchase</NavLink>
                        </div>
                </details>
            </div>
            </section>
         );
    }
}
 
export default User;

