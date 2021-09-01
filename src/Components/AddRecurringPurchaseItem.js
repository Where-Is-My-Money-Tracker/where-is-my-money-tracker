import React, { Component } from 'react';
import { getCategories } from '../fetch-utils';
import { findById } from '../helper-functions';
// import Dropdown from './Dropdown';

class AddRecurringPurchaseItem extends Component {
    state = {
        parentCategory: 0,
        childCategories: [],
        optionSelector: 'add new category',
        cost: '',
        description: '',
        frequency: 0,
        allCategories: [],
        newCategoryInput: ''
    }

componentDidMount = async () => {
    const categories = await getCategories();
    this.setState({ allCategories: categories });
    const childCategories = categories.filter(item => item.parent_id === this.state.parentCategory);
    this.setState({ childCategories });
}

handleChange = async (event, key) => {
    this.setState({ [key]: event.target.value });
}

handleCategoryChange = async (event) => {
    this.setState({ optionSelector: event.target.value })
    if (event.target.value !== 'add new category') {
        this.setState({ parentCategory: event.target.value });
    }
    const categories = await getCategories();
    const childCategories = categories.filter(item => item.parent_id === Number(event.target.value));
    this.setState({ childCategories });
    console.log(this.state);
}

handleSubmit = async (event) => {
    event.preventDefault();

}

    render() {
        let labelMessage;
        if (Number(this.state.parentCategory) === 0) {
            labelMessage ='none';
        } else {
            labelMessage = findById(this.state.allCategories, Number(this.state.parentCategory)).description;
        }
        return (
            <>
                <h1>Add Recurring Purchase Item Form</h1>
                <form>
                    <p>Item description</p>
                    <input type='text' onChange={(e) => this.handleChange(e, 'description')} />
                    <p>Item cost</p>
                    <input type='number' onChange={(e) => this.handleChange(e, 'cost')} />
                    <p>Frequency (days)</p>
                    <input type='number' onChange={(e) => this.handleChange(e, 'frequency')}/>
                    <br></br>
                    <label>Current Category: {labelMessage}
                    <br></br>
                    </label>
                    <select 
                        onChange={(e) => this.handleCategoryChange(e)}
                        value={this.state.optionSelector}
                    >
                        {this.state.childCategories.map( (cat) => (
                            <option
                                key={cat.id}
                                value={cat.id}
                            >{cat.description}</option>
                        ))};
                        <option value='add new category'>Add a category</option>
                    </select>
                        {this.state.optionSelector === 'add new category' 
                            ? <input
                                type="text"
                                onChange={(e)=> this.handleChange(e, 'newCategoryInput')}
                              ></input> 
                            : <p></p>
                        } 
                </form>
            </>
        );
    }
}
 
export default AddRecurringPurchaseItem;