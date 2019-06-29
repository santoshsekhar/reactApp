import React, {Component} from 'react';
import { isTemplateElement } from '@babel/types';
import AddUser from './components/AddUser'



class App extends Component{
    constructor()
    {
        super();
        this.state={
            items: [],
            isLoaded: false,
            textvalue: "",
            a:[]
       
        };
        
        
            
    }
   
  

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              items: result
              
            });
          });
      }

      
    // Add User

    // addUser = (name) => {

    //     console.log(name)
    // }
    addUser(){
        // var x = document.querySelector("#Newname").value
        //  x = "";
        var b = document.getElementById('Newname').value
        console.log(b);
        this.setState({
            isLoaded: true,
            a: b,
            // a: this.state.inputText 
        })
        // this.state.value.push(this.state.textvalue)
        // this.setState(
        //     this.state
        //   )
        //   console.log(this.state.value)
        
    }

    
      render() {
        const { items, currentPage, itemsPerPage,a } = this.state;
        var TestData = this.state.items.sort((x,y) => x.name.localeCompare(y.name));
        console.log(TestData);
        console.log(TestData);
       console.log(a);
       var pushData = this.state.items.push()
    //    TestData.push(a);
    console.log(pushData);
       
          return (
           <div>
               <h1>Users</h1>
                <ul>

                {items.map(item => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                   
                </li>
                ))}
                </ul>

                <div>
               {/* <AddUser addUser={this.addUser}/> */}
               <input type="text" id="Newname"/>
               <button onClick={() => this.addUser()}>+ Add User</button>
               </div>

           </div>   
         

  
          );
     
      }
}



	export default App;



