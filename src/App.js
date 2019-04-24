import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Holiday Checklist!</h1>
					<p>
						<strong>
							The place to <span class="vertical-text1">Jump</span>start your Holiday
						</strong>
					</p>
				</header>
				<TodoList title="Items to pack" />
				<TodoList title="Documents" />
			</div>
		);
	}
}

export default App;
