import React, { Component } from "react";
import Header from "../components/Header";
class Entry extends Component{
    constructor(props){
        super(props)
        this.state={
           check : this.props.done,
        }
    }
    render(){
        let showString;
        let id = this.props.id;
        let check_state;
        if (this.props.done===true){
            check_state = true;
            showString = <h1 className="todo-app__item-detail" style={{'opacity':0.4}}><del>{this.props.content}</del></h1>;
        }
        else {
            check_state = false;
            showString = <h1 className="todo-app__item-detail">{this.props.content}</h1>;
        }
        console.log('original state:', check_state);
        return (<li className="todo-app__item" key={id}>
        <div className= "todo-app__checkbox">
            <input type="checkbox" defaultChecked={check_state} id={id} onChange={this.props.changeEntryState} ></input>
            <label htmlFor={id}></label> 
        </div>
        {showString}
        <img src="./img/x.png" className="todo-app__item-x" onClick={this.props.deleteEntry}></img>
    </li>)
    }

}
export default Entry;