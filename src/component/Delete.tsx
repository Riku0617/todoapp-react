import React from 'react'

type TypeTodo = {
    inputValue: string;
    id :number;
    checked: boolean;
  }
  
  type Props = {
      id:number;
      todos:TypeTodo[];
      setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;
  }
  
  const Delete:React.FC<Props>= ({id,todos,setTodos}) => {
  
    const handleDelete = (id:number) => {
      let newTodos:TypeTodo[] = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    }    
    return (
      <button onClick={() => handleDelete(id)}>消</button>
    )
  }

export default Delete
