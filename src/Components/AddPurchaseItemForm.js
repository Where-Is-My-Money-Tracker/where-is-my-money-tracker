import React, { Component } from 'react';
import { getCategories } from '../fetch-utils.js';

class AddPurchaseItem extends Component {
    state = { 
        parentCategory:0,
        childCategories:[],
        categorySelect:0,
        cost:'',
        description:'', 
        timestamp:0,
        newCategoryInput:'',
     }
     componentDidMount= async() => {
        const categories = await getCategories()  
        const childCategories = categories.filter(item => item.parent_id === this.state.parentCategory)
        console.log(categories);
        this.setState({childCategories})
     }

    //  handlePurchase = async(e) => {
    //      e.preventDefault()
    //      const newPurchase = {
    //          description: this.state.description,
    //          cost: this.state.cost,
    //          category: this.state.category,
    //          timestamp: Date.now() 
    //      }
    //  }

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
                        onChange={(event)=> this.setState({cost: event.target.value})}
                        required></input>
                    <p>Category</p>
                    <select>
                        {this.state.childCategories.map(item => (
                            <option key={item.id} value={item.id}>{item.description}</option>
                        ))}
                    </select>
                    <button>Submit purchase item</button>
                </form>
            </>
         );
    }
}
 
export default AddPurchaseItem;