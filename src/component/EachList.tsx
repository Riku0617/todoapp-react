
import React from 'react'
import {Delete,Editter} from './index'

type TypeTodo = {
    inputValue: string;
    id :number;
    checked: boolean;
}
type Props = {
    todo: TypeTodo;
    todos: TypeTodo[];
    setTodos:React.Dispatch<React.SetStateAction<TypeTodo[]>>
}

const EachList:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <li key={todo.id}>
        <Editter todo={todo}/>
        <Delete id={todo.id} todos={todos} setTodos={setTodos}/>
    </li>
  )
}

export default EachList
