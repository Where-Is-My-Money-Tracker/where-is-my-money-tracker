import React, { Component } from "react";
import { deleteRecurring, getRecurring, putRecurring } from "../fetch-utils.js";
import "../Styles/ModifyRecurringPurchaseItems.css";

class ModifyRecurringPurchaseItem extends Component {
    state = {
        allRecurring: [],
    };

    componentDidMount = async () => {
        const allRecurring = await getRecurring();
        this.setState({ allRecurring });
    };

    handleStop = async (obj) => {
        obj.stop_timestamp = Date.now();
        await putRecurring(obj);
    };

    handleDelete = async (obj) => {
        await deleteRecurring(obj);
        const allRecurring = await getRecurring();
        this.setState({ allRecurring });
    };

    render() {
        return (
            <section className="modifyPurchase">
                <h1>Stop or Delete Recurring Purchases</h1>
                <article className="purchases">
                    {this.state.allRecurring.map((item) => (
                        <div className="purchase" key={item.id}>
                            {item.description} {item.cost}
                            <div className="buttons">
                                <button onClick={() => this.handleStop(item)}>
                                    Stop
                                </button>
                                <button onClick={() => this.handleDelete(item)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        );
    }
}

export default ModifyRecurringPurchaseItem;
