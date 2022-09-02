import React from 'react'

type Props = {
    inputValue:string;
    setInputValue:React.Dispatch<React.SetStateAction<string>>
    initValue:string;
    setInitValue:React.Dispatch<React.SetStateAction<string>>
}

const Input:React.FC<Props> = ({inputValue,setInputValue,initValue,setInitValue}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setInitValue(e.target.value);
        
    }
  return (
    <input type="text" onChange={(e) => handleChange(e)} value={initValue}></input>
  )
}

export default Input
