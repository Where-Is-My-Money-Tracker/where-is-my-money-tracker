import React, { Component } from 'react';
import { deletePurchase, getPurchases } from '../fetch-utils';

class DeletePurchases extends Component {
    state = { 
        allPurchases: []
    }
    componentDidMount = async () => {
        const allPurchases = await getPurchases();
        this.setState({ allPurchases })
    }
    handleDelete = async (obj) => {
        await deletePurchase(obj)
        const allPurchases = await getPurchases();
        this.setState({ allPurchases })
    }
    render() { 
        return ( 
            <>
                <h1>Delete a Purchase</h1>
                {this.state.allPurchases.map(item => (
                    <div key={item.id}>{item.description} {item.cost}
                        <button onClick={() => this.handleDelete(item)}>Delete</button>
                    </div>
                ))}
            </>
        );
    }
}
 
export default DeletePurchases;