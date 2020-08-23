import React from "react"


function TodoItem(props) {

    const completedStyle = {
        fontStyle : "italic",
        color: "#cdcdcd",
        textDecoration : "line-through"
    }
  
    return (
        <div className="todo-item">
            <input type="checkbox" className="checkbox-item" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}/>
            <p className="item-text" style={props.item.completed ? completedStyle : null}>
               {props.item.text}
            </p>
           
        </div>
        )
}

export default TodoItem