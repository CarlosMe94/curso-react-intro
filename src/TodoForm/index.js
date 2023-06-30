import  React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';


function TodoForm() {
    const {setOpenModal, addTodo} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <label for="">Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cebolla para el almuerzo" value={newTodoValue} onChange={onChange}></textarea>
            <div className="TodoForm-buttonContainer">
            <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
            

        </form>
    )
}
 export {TodoForm}