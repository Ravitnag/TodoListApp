import React from 'react';
import List from './List.js'
import Form from './Form.js'


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({ todoItems: [{id: '1',title: 'go to sleep', done: 'false' },
                         {id: '2',title: 'wash dishes', done: 'false' }  ]})
    }
    handleSubmit = (e, value) => {
        e.preventDefault();
        let item = {id: '13',title: value, done: 'false' }
        let list_item = this.state.todoItems
        list_item.push(item)
        this.setState({todoItems: list_item});
    }
    render() {
        return ( <div >
            <Form handlefunc={this.handleSubmit}/>
            <List list={this.state.todoItems} />
            </div>
        );
    }
}
