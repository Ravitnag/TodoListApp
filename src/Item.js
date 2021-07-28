import React from 'react';

export default class Item extends React.Component{
constructor(props)
{
    super (props)
}


render(){

    return(
        
        <li onClick={this.handleClick}>{this.props.title}</li>  
    )
}
}