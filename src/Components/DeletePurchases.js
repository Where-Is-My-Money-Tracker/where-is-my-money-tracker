import React, { Component } from 'react';
import { deletePurchase, getPurchases } from '../fetch-utils';
import './ModifyRecurringPurchaseItems.css';

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
            <section className="modifyPurchase">
                <h1>Delete a Purchase</h1>
                <article className="purchases">
                {this.state.allPurchases.map(item => (
                    <div className="purchase" key={item.id}>{item.description} {item.cost}
                        <div className="buttons">
                        <button onClick={() => this.handleDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}
                </article>
            </section>
        );
    }
}
 
export default DeletePurchases;