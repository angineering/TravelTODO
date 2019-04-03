import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: this.state.todos.length,
      todo: this.refs.todoTask.value,
      completed: false
    }
    this.refs.todoTask.value = '';
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  complete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      })
    });
  }


  render() {
    return (
      <div className='todo-list'>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.addTodo}>
          <input type="text" ref="todoTask" placeholder="Add a todo..." />
          <button type="submit">Add</button>
        </form>
        <ul>
          {
            this.state.todos.map(t =>
              <li
                key={t.id}
                onClick={() => this.complete(t.id)}
                className={t.completed ? 'completed todo' : 'todo'}
              >
                {t.todo}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
