import React from 'react';
import './item.css'
export default class Header extends React.Component {
    constructor(props) {
        
        super(props);
    }

    render() { 
        return (
            <div className="header">
            <h1 >
              ToDoList
            </h1> 
            </div>
  
        );
    }
}