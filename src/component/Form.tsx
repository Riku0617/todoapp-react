import React from 'react'
import {Input} from './index'

type TypeTodo = {
    inputValue: string;
    id :number;
    checked: boolean;
}

type Props = {
    inputValue:string;
    setInputValue:React.Dispatch<React.SetStateAction<string>>;
    initValue:string;
    setInitValue:React.Dispatch<React.SetStateAction<string>>;
    todoLength: number;
    setTodoLength:React.Dispatch<React.SetStateAction<number>>;
    todos:TypeTodo[];
    setTodos:React.Dispatch<React.SetStateAction<TypeTodo[]>>;
}

const Form :React.FC<Props> = ({inputValue,setInputValue,initValue,setInitValue,todoLength,setTodoLength,todos,setTodos}) =>{
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue) {
            return;
        }
        const newTodo: TypeTodo ={
            inputValue : inputValue,
            id : todoLength,
            checked: false,
        };
        console.log(inputValue)
        setTodos([newTodo,...todos]);
        setTodoLength(todoLength+1);
        setInputValue("");
        setInitValue("");
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <Input inputValue={inputValue} setInputValue={setInputValue} initValue={initValue} setInitValue={setInitValue}/>
        <button type='submit'>更新</button>
    </form>
  )
}

export default Form
