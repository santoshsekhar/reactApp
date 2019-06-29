import React,{Component } from 'react'

export class AddUser extends Component{

    state={
        name:'',
        email:''
    }

onSubmit=(e) => {
    e.preventDefault();
    this.props.addUser(this.state.name,this.state.email);
    this.setState({name:''},{email:''})

}
    onChange=(e) => this.setState({[e.target.name]:e.target.value});
    render(){
        return(
            <form onSubmit={this.onSubmit} style={{display:'flex'}} > 
        <input type ="text"  name ="fullname" placeholder="enter name" value={this.state.name} onChange={this.onChange} />
        <input type ="email"  name ="emailId" placeholder="enter email"  value={this.state.email} onChange={this.onChange}/>
        <input type ="submit"  name ="Submit"  className="btn" placeholder="Add user"  />
        
        
    </form>
        )
    }
}

export default AddUser