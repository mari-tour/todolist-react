import {useState} from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false
        }
        setTodos(todos => [...todos, newTodo])
        setTodo("")
    }

    function deleteTodo(id) {
      const updatedTodo = [...todos].filter((todo) => todo.id !== id)
      setTodos(updatedTodo)
    }

    function toggleComplete(id) {
      const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
      })
      setTodos(updatedTodos)
    }

   
    return (
        <> 
          <div className="App"> 
              <h1>bienvenue Todolist</h1>
              <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
                <button type="submit">Add Todo</button>
              </form>

              {todos.map(todo => 
                <div key={todo.id}>{todo.text}
                  <input
                      type="checkbox"
                      onChange={() => toggleComplete(todo.id)}
                      checkbox={todo.completed.toString()}
                  /> <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>)
              }
          </div>
      </>
    );
}

export default App;