import React, { Component } from 'react';
import { getCategories } from '../fetch-utils.js';

class AddPurchaseItem extends Component {
    state = { 
        description:'', 
        cost:0,
        category_id:0,
        timestamp:0,
        newCategory:'',
        childCategories:[]
     }
     componentDidMount= async() => {
        const categories = await getCategories()  
        console.log(categories);
        this.setState({
            childCategories: categories.description,
            
        })
     }

     handlePurchase = async(e) => {
         e.preventDefault()
         const newPurchase = {
             description: this.state.description,
             cost: this.state.cost,
             category: this.state.category,
             timestamp: Date.now() 
         }
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
                        onChange={(event)=> this.setState({cost: event.target.value})}
                        required></input>
                    <p>Category</p>
                    <select>
                        <option></option>
                    </select>
                    <button>Submit purchase item</button>
                </form>
            </>
         );
    }
}
 
export default AddPurchaseItem;