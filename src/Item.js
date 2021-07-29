import React from 'react';
import './item.css';

export default class Item extends React.Component{
constructor(props)
{
    super (props)
    this.state = (
        {
            remove_task: ''
        }
    )
}

handleClick=e=>{
    this.props.doneFunc(this.props.id)
    if(this.props.done)
    this.setState({remove_task: 'line-through'})
    else
    this.setState({remove_task: ''})
}
handleClickX=e=>{
    this.props.removeFunc(this.props.id)
}

render(){

    return(
        <div>
           <li> <lable style={{textDecorationLine: this.state.remove_task}} onClick={this.handleClick}>{this.props.title}</lable>
         <label>&nbsp;&nbsp;</label>
         <label onClick={this.handleClickX} Class="close">X</label></li>
           
        </div>
         
    )
}
}