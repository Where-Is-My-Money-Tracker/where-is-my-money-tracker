import React, { Component } from 'react';
import { deleteRecurring, getRecurring, putRecurring } from '../fetch-utils.js';
import './ModifyRecurringPurchaseItems.css';

//old mortgage timestamp: 1630458287409
class ModifyRecurringPurchaseItem extends Component {
    state = { 
        allRecurring: [],
        //add message for successful stop and delete
    }
    componentDidMount = async () => {
        const allRecurring = await getRecurring();
        this.setState({ allRecurring })

    }
    handleStop = async (obj) => {
        obj.stop_timestamp = Date.now()
        const stoppedRecurring = await putRecurring(obj)
        console.log(stoppedRecurring)
    }
    handleDelete = async (obj) => {
        await deleteRecurring(obj)
        const allRecurring = await getRecurring();
        this.setState({ allRecurring })
        console.log(this.state.allRecurring)
    }

    render() { 
        return ( 
            <section className="modifyPurchase">
                <h1>Stop or Delete Recurring Purchases</h1>
                <article className="purchases">
                {this.state.allRecurring.map(item => (
                    <div className="purchase" key={item.id}>{item.description} {item.cost}
                        <div className="buttons">
                        <button onClick={() => this.handleStop(item)}>Stop</button>
                        <button onClick={() => this.handleDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}
                </article>
            </section>
         );
    }
}
 
export default ModifyRecurringPurchaseItem;