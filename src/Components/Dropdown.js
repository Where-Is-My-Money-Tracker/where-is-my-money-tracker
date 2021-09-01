import React, { Component } from 'react';

class Dropdown extends Component {
    
    render() { 
        const {handleChange, value, label, options} = this.props;

        return ( 
            <div className="dropdown">
            <label>{label}</label>
            <select onChange={handleChange}>
                {options.map((option) => {
                return (
                    <option value={value} key={option.id}>
                        {option}
                    </option>
                )})}
            </select>
            </div>
         );
    }
}
 
export default Dropdown;