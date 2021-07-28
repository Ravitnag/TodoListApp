import React from 'react';
import Item from './Item';

export default class List extends React.Component {
    constructor(props) {
        
        super(props);
    }

    render() { 
        return (
            <div>
                {this.props.list.map(x => <Item key={x.id} title ={x.title}/>)}
            </div>
        );
    }
}