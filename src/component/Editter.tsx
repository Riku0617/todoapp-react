import React from 'react'

type TypeTodo = {
    inputValue: string;
    id :number;
    checked: boolean;
}
type Props = {
    todo: TypeTodo
}

const Editter :React.FC<Props> = ({todo}) => {
    const handleEdit = (inputValue:string) => {
        todo.inputValue = inputValue;
    }
    return (
        <input
            type="text"
            value={todo.inputValue}
            onChange={(e) => handleEdit(e.target.value)}
            disabled={todo.checked}
        />
    )
}

export default Editter
