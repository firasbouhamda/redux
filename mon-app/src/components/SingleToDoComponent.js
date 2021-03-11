import React from "react";
import { connect } from "react-redux";
import { removeToDo, completeToDo } from "../actions/index";

class SingleToDoComponent extends React.Component {
  render() {
    return (
      <container>
        
            
                  <button
                    className="itemCompleteButton" delete
                    onClick={() => this.props.completeToDo(this.props.toDo.id)}
                  >

                    Done                
                  </button>

                  <span
                    style={{
                      textDecoration: this.props.toDo.completed
                        ? "line-through"
                        : "none"
                    }}
                  >
                    {" "}
                    {this.props.index}.{this.props.toDo.text}{" "}
                    {this.props.toDo.completed === true ? "(completed)" : ""}{" "}
                  </span>
                
               
                  <button
                    className='btn btn-info'
                    onClick={() => this.props.removeToDo(this.props.toDo.id)}
                    delete
                  >
                  Delet
                  </button>
              
      </container>
    );
  }
}

export default connect(
  null,
  { removeToDo, completeToDo }
)(SingleToDoComponent);