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
      cardTypeCategory
      cardTypeTitle
      cardTypeIcon
    }
  }
}`;

const addTodo = `mutation createTodo($cardTypeCategory:String! $cardTypeTitle:String! $cardTypeIcon:String!) {
  createTodo(input:{
    cardTypeCategory:$cardTypeCategory
    cardTypeTitle:$cardTypeTitle
    cardTypeIcon:$cardTypeIcon
  }){
    id
    cardTypeCategory
    cardTypeTitle
    cardTypeIcon
  }
}`;


Amplify.configure(awsconfig);

class App extends Component {
  todoMutation = async () => {
    const todoDetails = {
      cardTypeCategory: 'Category!',
      cardTypeTitle: 'Title!',
      cardTypeIcon: 'Icon!'
    };
  
    const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
    console.log(newTodo);
  };
  
  listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listTodos));
    console.log(allTodos);
    console.log('this GraphQL Query data  pass to form',allTodos);

  };

  render(){
    Auth.currentAuthenticatedUser().then(currentuser => { console.log(currentuser)}); 
    

    return (
      <div className="App">
       <input type="file" onChange={this.uploadFile} /><br></br><br></br><br></br><br></br>
       <button onClick={this.todoMutation}>GraphQL Mutation</button><br></br>
       <button  onClick={this.listQuery}>GraphQL Query</button><br></br><br></br>
       <p> this is testing the graphql functionality. We need to add the functionality to add 
         the data in the  src\data\CardType.js and send it to the appsync. the array in the json 
         has 15 items
         the graphql schema is given here amplify\backend\api\temp9\schema.graphql
         and the operations are given here src\graphql

         the expection is to have two very simple pieces of functionality
         i. A dropdown which lets user choose the item for the list above, display the content of the 
         item as plain text field (inner elements of the JSON do not have to be hamdled separately.) . 
         and finally, an upload button which uploads the specific item to appsync

         ii. a display button, which upon clicking should display all the current as received from 
         appsync

         Note we are only using the local data\cardtype.js to simulate the input form . Please do not use it to display 
         all records 



       </p>

       <form>
        <label>
        cardTypeCategory:
          <input type="text" value=" " />
        </label><br></br>
        <label>
        cardTypeTitle:
          <input type="text" value=" " />
        </label><br></br>
        <label>
        cardTypeIcon:
          <input type="text" value=" " />
        </label><br></br>
      </form>

      
      </div>
    );
  }
}

export default withAuthenticator(App, true);