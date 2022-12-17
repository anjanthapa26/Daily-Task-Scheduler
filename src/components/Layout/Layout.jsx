import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import InputBarPopUp from '../InputBar/InputBarPopUp';
import ListOfTodos from '../ListOfTodos/ListOfTodos';

const Layout = () => {

  const [inputbarpopup, setInputBarPopUp] = useState(false)
  const [todos, setTodos] = useState(
    [
      {
        text:'Need to create my own software',
        isCompleted: false,
        isEditing: false
      },
      {
        text:'Need to merge marketing with coding',
        isCompleted:false,
        isEditing: false
      },
      {
        text:'Build an AI to overtake the world',
        isCompleted:false,
        isEditing:false
      }
    ]
  )

  return (
    <>
    <Container>
        <Box sx={{ 
         bgcolor: '#fffff',
         height: '90vh',
         width:'50vw',
         margin:'auto',
         boxShadow: 5,
         overflow:'hidden',
         position:'relative'
         }}>
        <ListOfTodos todos = {todos} setTodos = {setTodos} />
        {!inputbarpopup && 
          <Button variant='contained'
          component="div"
           onClick={() => setInputBarPopUp(!inputbarpopup)} 
            sx = {{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                position:'absolute',
                left:'89%',
                bottom:10
            }}>
            <AddIcon sx={{
                fontSize:'40px',
            }}/></Button>  }
        {inputbarpopup && <InputBarPopUp currInput = {inputbarpopup} setInput = {setInputBarPopUp} pos ={0} setTodos = {setTodos} todos = {todos}/>}
         </Box>
      </Container>
    </>
  )
}

export default Layout