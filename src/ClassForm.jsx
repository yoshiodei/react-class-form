import React, {Component} from 'react';

class ClassForm extends Component {
    constructor(props){
        super(props);
        
        this.state = { persons: [
            {name: "yoshi",description: "Lorem ipsum imet dor lerment neince learmnt srom."},
            {name: "odei",description: "Lorem ipsum imet dor lerment neince learmnt srom."},
            {name: "kwesi",description: "Lorem ipsum imet dor lerment neince learmnt srom."}
        ],
                      name: "",
                      description: ""
    };
    }
    
    handleChange = (e) =>{
            e.preventDefault();
         this.setState({[e.target.name]: e.target.value});
        console.log(this.state.name);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const newPersons ={
            name: this.state.name,
            description: this.state.description
        }
        this.setState({
           persons: [...this.state.persons, newPersons],
            name: "",
            description: ""
        })
    }
        
    render(){
        return(
            <div style={{margin: "0 50px"}}>
            <form onSubmit={this.handleSubmit}>
                <label>Name
                <input name="name" value={this.state.name} onChange={this.handleChange} /></label>
                <label>Description
                <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea></label>
                <input type="submit" value="Submit Me"/>
            </form>
            {this.state.persons.map((person,index) => {
                        return (
                        
                        <div key={person.index}>
                            <h4>Name: {person.name}</h4>
                            <h5>Description: {person.description}</h5>
                            <hr/>
                        </div>
                );})  }
            </div>
        );
    }
}

export default ClassForm;