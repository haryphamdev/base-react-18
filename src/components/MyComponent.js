import { useState } from "react"

const MyComponent = () => {
    const [newTodo, setNewTodo] = useState("eric");

    const [listTodo, setListTodo] = useState([
        { id: 'todo1', value: 'Doing homework' },
        { id: 'todo2', value: 'Learning React' }
    ]);

    const handleChangeInput = (event) => {
        setNewTodo(event.target.value)
    }

    const handleAddTodo = () => {
        setListTodo([...listTodo, { id: Math.floor((Math.random() * 10000) + 1), value: newTodo }])
    }

    const handleDeleteTodo = (todoId) => {
        let newFilter = listTodo.filter(item => item.id !== todoId);
        setListTodo(newFilter)
    }
    return (
        <div>
            <div>To do List:</div>
            {listTodo.map((todo, index) => {
                return (
                    <div>{index + 1}. {todo.value}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>
                )
            })}

            <br />
            <div>my to do = {newTodo}</div>
            <input type={'text'} onChange={(event) => handleChangeInput(event)} />
            <button onClick={() => handleAddTodo()}>Add to do</button>
        </div>
    )
}

export default MyComponent;