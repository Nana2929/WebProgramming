import React, { Component } from "react";

class Footer extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <footer className="todo-app__footer" id="todo-footer">
            <div className="todo-app__total"> {this.props.remainingnum} left</div>
            <ul className="todo-app__view-buttons">
                <button onClick={this.props.showAll}>All</button>
                <button onClick={this.props.showActive}>Active</button>
                <button onClick={this.props.showCompleted}>Completed</button>
            </ul>
            <div className="todo-app__clean">
            <button  onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        </footer>
        )
   }
}
export default Footer