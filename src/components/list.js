import React from 'react'

function List({ todos, setTodos, filter }) {
    
    const completedHandler = (id) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
        
        ))
    }

    const allCompleteHandler = () =>{
        setTodos(
            todos.map((todo) => 
                todo.isCompleted ? todo : {...todo, isCompleted: !todo.isCompleted}
            )
        )
    }

    const deleteHandler = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const filtered = todos.filter((todo) => {
        if(filter === 'all'){
            return true;
        }else if(filter === 'completed'){
            return todo.isCompleted
        }else{
            return !todo.isCompleted
        }
    })

    return (
        <div>
            <section className="main">
                <input   className="toggle-all" type="checkbox" />
                <label onClick={ allCompleteHandler} htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        filtered.map((todo) => (
                            <li key={todo.id} className={`${todo.isCompleted ? 'completed':''}`}>
                                <div className="view">
                                    <input onClick={() => completedHandler(todo.id)} className="toggle" checked={todo.isCompleted} type="checkbox" readOnly  />
                                    <label>{todo.inputText}</label>
                                    <button onClick={() => deleteHandler(todo.id)} className="destroy"></button>
                                </div>
                            </li>
                        ))
                    }





                </ul>
            </section>
        </div>
    )
}

export default List