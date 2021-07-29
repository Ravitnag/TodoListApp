import React from 'react';
import List from './List.js'
import Form from './Form.js'


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.count = 0;
        this.state = ({ todoItems: [{id: this.count++ ,title: 'go to sleep', done: 'false' },
                         {id: this.count++,title: 'wash dishes', done: false }  ]})
    }
    handleSubmit = (e, value) => {
        e.preventDefault();
        let item = {id: this.count++ ,title: value, done: 'false' }
        let list_item = this.state.todoItems
        list_item.push(item)
        this.setState({todoItems: list_item});
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
        copy.splice(index)
        this.setState({ todoItems:copy});
      }
    render() {
        return ( <div >
            <Form handlefunc={this.handleSubmit}/>
            <List list={this.state.todoItems} doneChange={this.doneChange} removeTask={this.removeTask}/>
            </div>
        );
    }
}
