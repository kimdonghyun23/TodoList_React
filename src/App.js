import './App.css';
import Inputitem from './components/Inputitem/inputitem';
import Itemlist from './components/Itemlist/itemlist';
import { useState } from 'react';

function App() {
  const [todos, settodos] = useState([])
  const addtodo = (inputvalue) =>{
    settodos([...todos, inputvalue]);
  }
  const deltodo = (delindex) => {
    const newtodos = todos.filter((_, index) => index !== delindex)
    settodos(newtodos);
  }
  return (
    <div className="App">
      <h2>ToDoList</h2>
      <Inputitem onaddtodo = {addtodo}></Inputitem>
      <Itemlist todos = {todos} ondeltodo = {deltodo}></Itemlist>
    </div>
  );
}

export default App;
