import React, { Component } from 'react';
import { getCategories, postCategories, postPurchase } from '../fetch-utils.js';
import { findById } from '../helper-functions.js';
import './AddPurchaseItemForm.css';

class AddPurchaseItem extends Component {
    state = { 
        parentCategory:0,
        childCategories:[],
        cost:'',
        description:'', 
        timestamp:0,
        newCategoryInput:'',
        optionSelector:'--',
        allCategories: []
     }

     componentDidMount= async() => {
        const categories = await getCategories()  
        this.setState({allCategories: categories})
        const childCategories = categories.filter(item => item.parent_id === this.state.parentCategory)
        this.setState({childCategories})
     }
    handleChange = async (event, key) => {
    this.setState({ [key]: event.target.value });
    }

    
    handleCategoryChange = async (event) => {
        this.setState({optionSelector: event.target.value})
        if (event.target.value !== 'SetNewCategory') {
            this.setState({ parentCategory: event.target.value });
        } 
        const categories = await getCategories();
        const childCategories = categories.filter(item => item.parent_id === Number(event.target.value));
        this.setState({ childCategories });
    }

    handleSubmitPurchase = async(e) => {
        e.preventDefault()
        const newPurchase = {
            description: this.state.description,
            cost: this.state.cost,
            category_id: this.state.parentCategory,
            timestamp: Date.now() 
        }
        if (this.state.optionSelector === 'SetNewCategory'){
            const newCategory = await postCategories({
                 parent_id: Number(this.state.parentCategory),
                 description: this.state.newCategoryInput
            })
            newPurchase.category_id = newCategory.id
        }
         await postPurchase(newPurchase)
    }

    render() {
        let labelMessage;
        if(Number(this.state.parentCategory) === 0){
            labelMessage = 'Main';
        } else {
            labelMessage = findById(this.state.allCategories, Number(this.state.parentCategory).description)
        }
        return ( 
            <div className="addPurchaseForm">
                <h1>Add New Purchase</h1>
                <form onSubmit={this.handlePurchase} className="purchaseInput">
                    <p>Item Description</p>
                    <input type='text'
                        onChange={(event)=> this.setState({description: event.target.value})}
                        required></input>
                    <p>Cost</p>
                    <input type='number'
                        step='0.01' // NEED STEP 0.01 FOR DECIMAL NUMBERS
                        onChange={(event)=> this.setState({cost: event.target.value})}
                        required>
                    </input>
                    <br></br>
                    <label id="dropDownLabel">Current Category: {labelMessage}
                        <br></br>
                        <p><i>Select below a subcategory of {labelMessage} or add a new subcategory to {labelMessage}</i></p>
                    </label>
                    <select onChange={(e) => this.handleCategoryChange(e)}
                            value={this.state.optionSelector}
                            >
                            <option value='--'>--</option>
                        {this.state.childCategories.map(item => (
                            <option key={item.id} value={item.id}>{item.description}</option>
                            ))}
                            <option key='new' value='SetNewCategory'>Set New Category</option>
                    </select>
                    {this.state.optionSelector === 'SetNewCategory' || this.state.childCategories.length === 0
                    ? <input type='text'
                        onChange={(e)=> this.setState({newCategoryInput: e.target.value})}
                        ></input> 
                    : <p></p>} 
                    <button id="submit-button">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddPurchaseItem;