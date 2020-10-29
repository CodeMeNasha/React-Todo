import React from "react";
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 

  render() {
    return (
      <div>
        <h1> Welcome To Your Todo App</h1>
        <TodoForm />
      </div>
        
    );
  }
}

export default App;
