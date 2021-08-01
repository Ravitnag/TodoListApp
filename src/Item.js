import React from 'react';
import './item.css';

export default class Item extends React.Component{
constructor(props)
{
    super (props)
    this.state = (
        {
            class_remove_task: ''
        }
    )
}

handleClick=e=>{
    this.props.doneFunc(this.props.id)
    if(this.props.done)
    this.setState({class_remove_task: 'checked'})
    else
    this.setState({class_remove_task: ''})
}
handleClickX=e=>{
    this.props.removeFunc(this.props.id)
}

render(){

    return(
                <li class={this.state.class_remove_task}> 
                <div>
                    <span onClick={this.handleClick}>{this.props.title} </span>
                  <span onClick={this.handleClickX} Class="close">X</span>
                </div>
                </li>     
    )
}
}