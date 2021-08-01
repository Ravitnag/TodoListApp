import React from 'react';
import './Form.css'

export default class Form extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={ text:''}
        
    }

    callToSubmit=e =>{
         this.props.handlefunc(e, this.state.text);
         this.setState({text: ''})
         this.nameInput.focus();
    }
    handlechange=e =>{
        this.setState({text: e.target.value})
        e.preventDefault(); 
    }

    componentDidMount(){
        this.nameInput.focus(); 
     }    
        
    render() {
        return (
            <div>
                <input placeholder="my next task" type="text" ref={(input) => { this.nameInput = input; }} value={this.state.text} onChange={this.handlechange} />  
                <span class="addBtn" type="submit" value="add task" onClick={this.callToSubmit}> add task </span>
             </div>
        );
    }


}