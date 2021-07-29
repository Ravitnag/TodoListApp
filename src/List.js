import React from 'react';
import Item from './Item';

export default class List extends React.Component {
    constructor(props) {
        
        super(props);
    }
    doneFunc=(id)=>
    {
        this.props.doneChange(id);
    }
    removeFunc=(id)=>{
        this.props.removeTask(id)
    }
    render() { 
        return (
            <div>
                {this.props.list.map(x => <Item done={x.done} key={x.id} id={x.id} title ={x.title} doneFunc={this.doneFunc} removeFunc={this.removeFunc}/>)}
            </div>
        );
    }
}