import React, { useRef } from 'react'
import Paper from '@mui/material/Paper'

const ListOfTodos = ({todos,setTodos}) => {

    const dragItem = useRef(null)
    const dragOverItem = useRef(null)

    const handleClick = (e,inx) => {
        if (e.detail === 2) {
            todos.splice(inx,1)
            const editedTodos = [...todos]
            setTodos(editedTodos)
        }
    }

    const handleSort = () => {
        let _todos = [...todos]

        const draggedItemContent = _todos.splice(dragItem.current,1)[0]

        _todos.splice(dragOverItem.current,0,draggedItemContent)

        console.log(dragItem.current,dragOverItem.current,_todos)
        dragItem.current = null
        dragOverItem.current = null
        setTodos(_todos)
    }
  return (
    <>
    {todos.map((todo,inx) => {
        return(
            <Paper 
            key = {inx}
            elevation={24}
            draggable
            onClick = {(e) => {handleClick(e,inx)}}
            onDragStart= {(e) => (dragItem.current = inx)}
            onDragEnter = {(e) => (dragOverItem.current = inx)}
            onDragEnd = {handleSort}
            onDragOver = {(e) => e.preventDefault()}
            sx ={{
                width:'100%',
                padding:'20px',
                marginBottom:'6px'
            }}
            >
            {todo.text}
            </Paper> 
        )
    })}
    </>
  )
}

export default ListOfTodos