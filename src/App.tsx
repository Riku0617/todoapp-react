import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Title,Form,EachList, Delete} from './component/index';

function App() {

  type TypeTodo = {
    inputValue:string;
    id: number;
    checked:boolean;
  }

  const [inputValue,setInputValue] = useState<string>(""); 
  const [initValue,setInitValue] = useState<string>("");
  const [todos,setTodos] = useState<TypeTodo[]>([]);
  const [todoLength,setTodoLength] = useState(0);

  return (
    <div className="App">
      <div>
        <h2><Title title="TodoList with React-App"/></h2>
        <Form inputValue={inputValue}
              setInputValue={setInputValue}
              initValue = {initValue}
              setInitValue = {setInitValue}
              todoLength = {todoLength}
              setTodoLength = {setTodoLength}
              todos = {todos}
              setTodos = {setTodos}
        />
        <ul className="todoList">
          {todos.map((todo) => (
              <>
              <EachList todo={todo} todos={todos} setTodos={setTodos}/>
              
              </>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default App;
