import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddPurchaseItem from "./Components/AddPurchaseItemForm.js";
import AddRecurringPurchaseItem from "./Components/AddRecurringPurchaseItem.js";
import ModifyRecurringPurchaseItem from "./Components/ModifyRecurringPurchaseItem.js";
import Signin from "./Components/SignInForm.js";
import Signup from "./Components/SignUpForm.js";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import AboutUs from "./Components/AboutUs.js";
import User from "./Components/User.js";
import DeletePurchases from "./Components/DeletePurchases.js";
import "./App.css";

class App extends Component {
    state = {
        token: localStorage.getItem("TOKEN"),
    };
    setToken = (value) => {
        this.setState({ token: value });
    };
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route
                        path="/signin"
                        render={(routerProps) => (
                            <Signin setToken={this.setToken} {...routerProps} />
                        )}
                    ></Route>
                    <Route
                        path="/signup"
                        render={(routerProps) => (
                            <Signup setToken={this.setToken} {...routerProps} />
                        )}
                    ></Route>
                    <Route
                        path="/user"
                        render={(routerProps) =>
                            this.state.token ? (
                                <User
                                    token={this.state.token}
                                    {...routerProps}
                                />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    ></Route>
                    {/* make the routes below restful */}
                    <Route
                        path="/addpurchaseitem"
                        render={(routerProps) =>
                            this.state.token ? (
                                <AddPurchaseItem
                                    token={this.state.token}
                                    {...routerProps}
                                />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    ></Route>
                    <Route
                        path="/addrecurringpurchaseitem"
                        render={(routerProps) =>
                            this.state.token ? (
                                <AddRecurringPurchaseItem
                                    token={this.state.token}
                                    {...routerProps}
                                />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    ></Route>
                    <Route
                        path="/modifyrecurringpurchaseitem"
                        render={(routerProps) =>
                            this.state.token ? (
                                <ModifyRecurringPurchaseItem
                                    token={this.state.token}
                                    {...routerProps}
                                />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    ></Route>
                    <Route
                        path="/deletepurchases"
                        render={(routerProps) =>
                            this.state.token ? (
                                <DeletePurchases
                                    token={this.state.token}
                                    {...routerProps}
                                />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    ></Route>
                    <Route
                        path="/aboutus"
                        render={(routerProps) => <AboutUs {...routerProps} />}
                    ></Route>
                    <Route
                        exact
                        path="/"
                        render={(routerProps) => (
                            <Home
                                token={this.state.token}
                                setToken={this.setToken}
                                {...routerProps}
                            />
                        )}
                    ></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
