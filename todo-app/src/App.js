import { VStack, IconButton, Box, Heading, useColorMode } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [state, setState] = useState(false)
  const [edit, setEdit] = useState("")
  console.log(todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    console.log(id, "hellow")
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }
  function editTodo(id) {
    console.log(id, edit)
    setTodos(todos.map((todo) => {
      return todo.id === id ? { id: todo.id, body: edit ? edit : todo.body } : todo
    }))
    setState(false)
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  return (
    <VStack p='4'>
      <Box>
        <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, cyan.400, purple.400, pink.400)' bgClip='text'>Todo Application</Heading>
      </Box>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} state={state} setState={setState} setEdit={setEdit} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
