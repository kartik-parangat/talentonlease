import React, { useState } from 'react';
import { VStack, StackDivider, HStack, Text, Spacer, IconButton, Badge ,Button} from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import '../components/todo.css'


const TodoList = ({todos, deleteTodo,editTodo, state, setState, setEdit}) => {
  const [id, setId] = useState()
  function onDoubleClick(id) {
    console.log("jh")
    setId(id)
    setState(!state)
  }
  if(!todos.length) {
    return(
      <Badge colorScheme='cyan' p='4' borderRadius='lg'>
        No Todos, yay!!!
      </Badge>
    );
  }
  return (
    <>
    {state == false ? (
    <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg' padding='4' w='100%' maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}} alignItems='stretch'>
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text onDoubleClick={()=>onDoubleClick(todo.id)} style={{ "display":state == true? "none":"block"}}>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />}   isRound='true' onClick={() => deleteTodo(todo.id)} />
          {/* <IconButton icon={<AiOutlineEdit />}   isRound='true' onClick={() => editTodo(todo.id)} /> */}
        </HStack>
      ))}
    </VStack>
    ) : 
      todos.map(todo => (
        todo.id == id? 
    <>

      <input className='input-box' type="text"  Value={todo.body} onChange={(e)=>{setEdit(e.target.value)}}></input>
      <Button  onClick={() => editTodo(todo.id)} type='submit' colorScheme='cyan' px='8'>Update Todo</Button>
      </> : ""
      ))
    }
    </>
  );
}

export default TodoList;
