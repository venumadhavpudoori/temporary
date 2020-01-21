import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Amplify, { Auth, Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; 
const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;

const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`;


Amplify.configure(awsconfig);

class App extends Component {
  todoMutation = async () => {
    const todoDetails = {
      name: 'Party tonight!',
      description: 'Amplify CLI rocks!'
    };
  
    const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
    console.log(newTodo);
  };
  
  listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listTodos));
    console.log(allTodos);
  };

  render(){
    Auth.currentAuthenticatedUser().then(currentuser => { console.log(currentuser)}); 
    

    return (
      <div className="App">
       
        <input type="file" onChange={this.uploadFile} />
        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.todoMutation}>GraphQL Mutation</button>
      
      </div>
    );
  }
}

export default withAuthenticator(App, true);