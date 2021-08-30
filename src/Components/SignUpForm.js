import React, { Component } from 'react';
import { getToken } from './fetch-utils.js';

class Signup extends Component {
    state = { email: '', password: '' };

    handleSubmit = async (event) => {
        event.preventDefault();

        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            }, 'signup'
        );
        this.props.setToken(token);

        this.props.history.push('/user');
    };

    render() { 
        return (
            <>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-control'>
                        <label>Email: </label>
                        <input
                            type='email'
                            onChange={ (event) => {
                                this.setState({ email: event.target.value })
                            }}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Password: </label>
                        <input
                            type='password'
                            onChange={ (event) => {
                                this.setState({ password: event.target.value })
                            }}
                        />
                    </div>
                    <button>{ this.targetType() }</button>
                </form>
            </>
        );
    }
}
 
export default Signup;