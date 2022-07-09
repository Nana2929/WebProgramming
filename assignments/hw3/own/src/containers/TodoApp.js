import React, { Component } from "react";
import Header from "../components/Header";
import Entry from './Entry.js';
import Footer from './Footer.js';
// let { stat, exists, readFile } = require('fs');
var {add} = require('mathjs');
// console.log(add(9,9));

// Full React Tutorial #27 - Controlled Inputs (forms)
// https://www.youtube.com/watch?v=IkMND33x0qQ
// this.props.{} read-only
// this.state. ... can be set

class TodoApp extends Component {
    constructor(props){
        super(props) // all reatc component classes that have a constructor should have a super(props)
        this.state = {
            inputValue : '', // <del>blue</del>
            todos : [],
            removed:[],
            idcount : 0,
            show_entries: [],
        };
    }

    // use arrow function to avoid writing to avoid something like
    // this.handleClick = this.handleClick.bind(this);
    renderEntries = () => {
        return (
            <ul className="todo-app__list" id="todo-list">
            {this.state.show_entries.map((e) => <Entry id={e['id']} content={e['content']} done={e['done']}
            changeEntryState={() => this.changeEntryState(e['id'])} deleteEntry ={() => this.deleteEntry(e['id'])}/>)}
            </ul>
        )
    }

    renderFooter =()=>{
        return(<Footer
            remainingnum={this.state.todos.filter(e => e['done'] === false).length}
            showAll={()=>this.showAll()}
            showCompleted={()=>this.showCompleted()}
            showActive={()=>this.showActive()} clearCompleted={()=>this.clearCompleted()}/>)
    }

    changeEntryState = (id) => {
        console.log('change entry state ' + id);
        for (let x = 0; x < this.state.todos.length; x++){
            if (this.state.todos[x]['id'] === id){
                const todos = this.state.todos.slice(); // shallow copy
                let curr = todos[x]['done'];
                todos[x]['done'] = (curr === true) ? false : true;
                console.log('changed entry state from '+curr + ' to ' + todos[x]['done']);
                this.setState({'todos': todos});
            }
        }
    }

    clearCompleted = () => {
        console.log('removing completes.')
        const todos = this.state.todos.slice();
        const new_todos = todos.filter((e)=>e['done'] === false);
        this.setState({'todos': new_todos, 'show_entries': new_todos});
    }

    deleteEntry = (id) => {
        console.log('removing entry ' + id);
        const todos = this.state.todos.slice();
        for (let x = 0; x < this.state.todos.length; x++){
            if (this.state.todos[x]['id'] === id){
                // const removed = this.state.removed.slice();
                var del_entry = todos.splice(x, 1);
                console.log(todos);
                // removed.push(del_entry);
                this.setState({'todos': todos, 'show_entries': todos});

                console.log(del_entry);
            }

    }}

    handlePressEnter = (event) => {
        //press Enter
        if (event.key === 'Enter' && this.state.inputValue !== ""){
            console.log('Enter pressed.')
            const todos = this.state.todos.slice(); //.slice() returns a show copy
            let id = this.state.idcount + 1;
            let record = {'id': id, 'content': this.state.inputValue, 'done': false};
            todos.push(record);
            this.setState({
                inputValue: '',
                todos: todos,
                show_entries:todos,
                idcount: id,
            });
      }
    }

    handleInputChange = (event) => {
        // display the input value
        this.setState({
            inputValue: event.target.value,
        });
        // console.log('Input Value: '+this.state.inputValue)
    }

    showAll =(e)=>{
        this.setState({'show_entries':this.state.todos})
    }
    showCompleted =(e)=>{
        this.setState({'show_entries':this.state.todos.filter(e => e['done'] === true)})
    }
    showActive=(e)=>{
        this.setState({'show_entries':this.state.todos.filter(e => e['done'] === false)})
    }

    render(){
        window.state = this.state;
        return (<div id="root" className="todo-app__root">
                <Header className="todo-app__header" text="todos"></Header>
                <section className="todo-app__main">
                <input type="text" value = {this.state.inputValue} onKeyPress = {this.handlePressEnter}
                onChange = {this.handleInputChange} // setting arg from defaultValue to value acheives 'press enter and clean the input field'
                placeholder="What needs to be done today?" className="todo-app__input"></input>
                {this.renderEntries()}
                </section>
                {this.state.todos.length > 0 ? this.renderFooter(): null}
                </div>);
    }
}

export default TodoApp;
