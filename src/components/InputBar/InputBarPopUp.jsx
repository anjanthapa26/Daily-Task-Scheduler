import React, { useState } from 'react'
import { InputBar } from './InputBar'
import TextField from '@mui/material/TextField'
import sendbtn from './../../Images/send_btn.png'
import Button from '@mui/material/Button'


const InputBarPopUp = ({currInput,setInput,pos,setTodos,todos}) => {
  const [todoelement, setTodoElement] = useState('')
  const [labelvalue, setLabelValue] = useState("what's need to be done?")

  const performAction = () => {
    setInput(!currInput)
    if (todoelement !== '') {
      const newTodos = [...todos,todoelement]
      setTodos(newTodos)
    }
  }

  return (
    <>
    <InputBar pos={pos} currCondition = {currInput}>
      <TextField
      id="outlined-basic"
      label={labelvalue}
      variant="outlined"
      multiline = {true}
      onChange = {(e) => setTodoElement({
        text:e.target.value,
        isCompleted:false,
        isEditing:false
      })}
      rows= {2}
      sx = {{
        width:'88%',
        float:'left'
        
      }}
      />
      <Button
      onClick={(e) => {(todoelement.length <= 0) ? setLabelValue('Please provide todo task'):performAction()}}
       sx ={{
        borderRadius:'50%'
       }}><img src={sendbtn} style={{marginTop:'12px'}} /></Button>
    </InputBar>
    </>
  )
}

export default InputBarPopUp