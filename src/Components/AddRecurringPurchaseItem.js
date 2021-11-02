import React, { Component } from 'react';
import { getCategories, postCategories, postRecurring } from '../fetch-utils';
import { findById } from '../helper-functions';
import '../Styles/AddPurchaseItemForm.css';

class AddRecurringPurchaseItem extends Component {
    state = {
        parentCategory: 0,
        childCategories: [],
        optionSelector: '--',
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
handleChange = async (e, key) => {
    this.setState({ [key]: e.target.value });
}
handleCategoryChange = async (e) => {
    if (e.target.value === '--') return;
    this.setState({ optionSelector: e.target.value })
    if (e.target.value !== 'add new category') {
        this.setState({ parentCategory: e.target.value });
    }
    const categories = await getCategories();
    const childCategories = categories.filter(item => item.parent_id === Number(e.target.value));
    this.setState({ childCategories });
}
handleSubmit = async (e) => {
    const obj = {
        category_id: this.state.parentCategory,
        description: this.state.description,
        cost: this.state.cost,
        frequency: Number(this.state.frequency) * 86400000,
        start_timestamp: Date.now(),
        stop_timestamp: Date.now()
    }
    e.preventDefault();
    if (this.state.optionSelector === 'add new category') {
        const newCategory = await postCategories(
            {
                description: this.state.newCategoryInput,
                parent_id: Number(this.state.parentCategory)
            }
        )
        obj.category_id = newCategory.id;
    }
    await postRecurring(obj);
    this.props.history.push('/user')
}
    render() {
        let labelMessage;
        if (Number(this.state.parentCategory) === 0) {
            labelMessage ='Main';
        } else {
            labelMessage = findById(this.state.allCategories, Number(this.state.parentCategory)).description;
        }
        return (
            <div className="addPurchaseForm">
                <h1>Add Recurring Purchase Item Form</h1>
                <form onSubmit={(e) => this.handleSubmit(e)} className="purchaseInput">
                    <p>Item description</p>
                    <input type='text' onChange={(e) => this.handleChange(e, 'description')} required/>
                    <p>Item cost</p>
                    <input type='number' step='0.01' onChange={(e) => this.handleChange(e, 'cost')} required/>
                    <p>Frequency (days)</p>
                    <input type='number' onChange={(e) => this.handleChange(e, 'frequency')}/>
                    <br></br>
                    <label id="dropDownLabel">
                        Current Category: {labelMessage}
                        <br></br>
                        <p><i>Use the selector below to choose a subcategory of, or add a new subcategory to, {labelMessage}</i></p>
                    </label>
                    <select 
                        onChange={(e) => this.handleCategoryChange(e)}
                        value={this.state.optionSelector}>
                        <option value='--'>--</option>
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
                                type='text'
                                onChange={(e)=> this.handleChange(e, 'newCategoryInput')}> 
                              </input> 
                            : <p></p>
                        } 
                    <button id="submit-button" type='sumit'>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default AddRecurringPurchaseItem;