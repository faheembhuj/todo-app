import React, { Fragment } from 'react';
import TodoList from '../TodoList'

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todos: [],
            newData: []
        }
    }
    handleSubmit = () => {
        const { todo, todos } = this.state;
        if (!todo) {
            return alert('Please add todo')
        }
        let previousTodo = todos;
        previousTodo.push(todo);
        this.setState({
            todos: previousTodo,
            todo: '',
            search: '',
            newData:[]


        })




    }
    handleSearch = (e) => {
        let search = e.target.value
        const { todos } = this.state;
        this.setState({
            search
        }, () => {
            const newData = todos.filter(function (item) {
                const itemData = item
                    ? item.toUpperCase()
                    : ''.toUpperCase();
                return itemData.indexOf(search.toUpperCase()) > -1;
            });
            this.setState({ newData: newData })
        })
    }
    handleClear =() =>{
        this.setState({
            search: '',
            newData:[]
        })
    }

    render() {
        const { todo, todos, search, newData } = this.state
        return (
            <Fragment>
                <h1>ADD TODO</h1>
                <input value={todo} onChange={(e) => this.setState({ todo: e.target.value })} />
                <button onClick={this.handleSubmit} >ADD TODO</button>
                <div>
                    <div>
                        <input value={search} onChange={value => this.handleSearch(value)} />
                        <button onClick={this.handleClear} >Clear</button>
                    </div>
                    <TodoList data={newData.length || search ? newData : todos} />
                </div>
            </Fragment>
        )
    }
}

export default AddTodo;