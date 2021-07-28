import React from 'react';

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
            <form>
                <input type="text" ref={(input) => { this.nameInput = input; }} value={this.state.text} onChange={this.handlechange} />  
                <input type="submit" value="add task" onClick={this.callToSubmit}/>
             </form>
             </div>
        );
    }


}