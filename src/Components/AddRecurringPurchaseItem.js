import React, { Component } from 'react';
import { getCategories } from '../fetch-utils';
// import Dropdown from './Dropdown';

class AddRecurringPurchaseItem extends Component {
    state = {
        parentCategory: 0,
        childCategories: [],
        cost: '',
        description: '',
        frequency: 0,
        newCategoryInput: ''
    }

componentDidMount = async () => {
    const categories = await getCategories();
    const childCategories = categories.filter(item => item.parent_id === this.state.parentCategory);
    this.setState({ childCategories });
}

handleChange = async (event, key) => {
    this.setState({ [key]: event.target.value });
}

handleCategoryChange = async (event) => {
    const categories = await getCategories();
    const childCategories = categories.filter(item => item.parent_id === event.target.value);
    this.setState({ childCategories: childCategories, parentCategory: event.target.value });

}

handleSubmit = async (event) => {
    event.preventDefault();

}

    render() { 
        return (
            <>
                <h1>Add Recurring Purchase Item Form</h1>
                <form>
                    {/* <Dropdown>
                        handleChange={this.handleChangeCategory}
                        value={this.state.parentCategory}
                        label='category'
                        options={this.state.childCategories}
                    </Dropdown> */}
                    <select>
                        value={this.state.parentCategory}
                        {this.state.childCategories.map( (cat) => (
                            <option
                                key={cat.id}
                                value={cat.id}
                            >{cat.description}</option>
                        ))};
                    </select>
                </form>
            </>
        );
    }
}
 
export default AddRecurringPurchaseItem;