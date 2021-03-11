import React from "react";
import { connect } from "react-redux";
import { deleteAll } from "../actions/index";
import { setFilter } from "../actions/index";

import SingleToDoComponent from "./SingleToDoComponent";


function filterToDos(todos, type) {
  switch (type) {
    case "ALL":
      return todos;
    case "COMPLETED":
      return todos.filter(todo => todo.completed === true);
    case "ACTIVE":
      return todos.filter(todo => todo.completed === false);
    default:
      return todos;
  }
}

class ListComponent extends React.Component {
  state = {
    search: ""
  };

  handleChange = async e => {
    await this.setState({
      search: e.target.value
    });
    this.props.searchToDo(this.state.search);
  };

  render() {
    return (
      <container>
               

            <button   
             onClick={() => this.props.setFilter("ACTIVE")}
>
            
           
              Show active
            </button>

      
            <button
            
              onClick={() => this.props.setFilter("COMPLETED")}
            >
              Show Completed
            </button>
          

            <button variant="link" onClick={() => this.props.setFilter("ALL")}>
              Show All
            </button>
 

   
            {this.props.toDoList.map((toDo, index) => {
              return (
                <SingleToDoComponent
                  key={toDo.id}
                  toDo={toDo}
                  index={index + 1}
                />
              );
            })}
         
        
      </container>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: filterToDos(state.todo.todos, state.todo.filter)
  };
};

export default connect(
  mapStateToProps,
  { deleteAll, setFilter }
)
(ListComponent);