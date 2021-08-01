import React from 'react';
import List from './List.js'
import Form from './Form.js'
import Header from './Header.js'
import './item.css'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.count = 0;
        this.state = ({ todoItems: [{id: this.count++ ,title: "To make Ravit Pancakes", done: 'false'},
        {id: this.count++ ,title: "To give Ravit money", done: 'false'}]})
    }
    handleSubmit = (e, value) => {
        e.preventDefault();
        if (value && value.trim())
        {
            let item = {id: this.count++ ,title: value, done: 'false' }
            let list_item = this.state.todoItems
            list_item.push(item)
            this.setState({todoItems: list_item});
        }
    }
    doneChange =(id)=>{
      let index  = this.state.todoItems.findIndex(element => element.id == id );
      const copy = this.state.todoItems.map((item, i) => {
          const d = Object.assign(item);
          if(i === index) {
              d.done = !d.done;
            }
            console.log(d)
            return d;
      });
      this.setState({ todoItems:copy});
    }
    removeTask =(id)=>{
        let index  = this.state.todoItems.findIndex(element => element.id == id );
        const copy = this.state.todoItems.map((item) => {
            const d = Object.assign(item);
              return d;
        });
        copy.splice(index,1)
        this.setState({ todoItems:copy});
      }
    render() {
        return ( <div >
            <Header/>
            <List list={this.state.todoItems} doneChange={this.doneChange} removeTask={this.removeTask}/>
            <Form handlefunc={this.handleSubmit}/>
            
            </div>
        );
    }
}
