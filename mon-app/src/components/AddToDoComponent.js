import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions/index";

class AddToDoComponent extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCancelButton = () => {
    this.setState({
      text: ""
    });
  };

  handleAddButton = text => {
    this.props.addToDo(text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <container>
      
            <p className="title"> To Do List </p>
      

            <span>Add to List:</span>
            <input
              type="text"
              onChange={this.handleChange}
              className="toDoText"
              value={this.state.text}
            />
            <button
             
              onClick={() => this.handleAddButton(this.state.text)}
            >
              Add
            </button>
            <button  onClick={this.handleCancelButton} >
              Cancel
            </button>
         
      </container>
    );
  }
}

export default connect(
  null,
  { addToDo }
)(AddToDoComponent);