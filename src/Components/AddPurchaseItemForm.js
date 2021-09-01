import React, { Component } from 'react';
import { getCategories, postCategories, postPurchase } from '../fetch-utils.js';


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
    
    //  fetchParentCategory = async() => {
    //      const thing = findById(this.state.allCategories, Number(this.state.parentCategory))
    //      console.log(thing)
    //      return thing
    //  }
     handleCategoryChange = async (event) => {
        this.setState({optionSelector: event.target.value})
        if (event.target.value !== 'SetNewCategory') {
            this.setState({ parentCategory: event.target.value });
        } 
        const categories = await getCategories();
        const childCategories = categories.filter(item => item.parent_id === Number(event.target.value));
        this.setState({ childCategories });
     }

     handlePurchase = async(e) => {
         e.preventDefault()
         const newCategory = {
             parent_id: this.state.parentCategory,
             description: this.state.newCategoryInput
         }
         const newPurchase = {
             description: this.state.description,
             cost: this.state.cost,
             category_id: this.state.parentCategory,
             timestamp: Date.now() 
         }
         await postPurchase(newPurchase)
         await postCategories(newCategory)
     }

    render() { 
        return ( 
            <>
                <h1>Add Purchase Item Form</h1>
                <form onSubmit={this.handlePurchase}>
                    <p>Item Description</p>
                    <input type='text'
                        onChange={(event)=> this.setState({description: event.target.value})}
                        required></input>
                    <p>Cost</p>
                    <input type='number'
                        step="0.01" // NEED STEP 0.01 FOR DECIMAL NUMBERS
                        onChange={(event)=> this.setState({cost: event.target.value})}
                        required></input>
                    <p>Category</p>
                    <label>
                        {/* {this.fetchParentCategory} */}
                        {/* label to indicate parent category selected */}
                    </label>
                    <select onChange={(e) => this.handleCategoryChange(e)}
                            value={this.state.optionSelector}
                            >
                            <option value='--'>--</option>
                        {this.state.childCategories.map(item => (
                            <option key={item.id} value={item.id}>{item.description}</option>
                            ))}
                            <option key="new" value="SetNewCategory">Set New Category</option>
                    </select>
                    {this.state.optionSelector === 'SetNewCategory' || this.state.childCategories.length === 0
                    ? <input type="text"
                        onChange={(e)=> this.setState({newCategoryInput: e.target.value})}
                        ></input> 
                    : <p></p>} 
                    {/* Handle input change when SetNewCategory cascades input field */}
                    <button>Submit purchase item</button>
                </form>
            </>
         );
    }
}
 
export default AddPurchaseItem;