import React from 'react'
import ToDosList from './ToDosList';
import CreateTodos from './CreateTodos';
const todos = [{
	task:'Have shower and go to bed',
	isCompleted: false,
	priority: 'low'
},
{
	task:'Make food for hungry/angry GF',
	isCompleted:false,
	priority: 'high'
},
{	task: 'set up React',
	isCompleted: true,
	priority: 'medium'


}
];

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos
		}
	}

	render(){
		return(
			<div>
				<h1>React ToDos app</h1>
				<CreateTodos todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<ToDosList todos={this.state.todos}
				toggleTask={this.toggleTask.bind(this)}
				saveTask={this.saveTask.bind(this)}
				deleteTask={this.deleteTask.bind(this)}/>

			</div>);
	}
	toggleTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos})

    }
	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({todos: this.state.todos})
	}
	saveTask(oldTask, newTask, priority){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		foundTodo.priority = priority;
		this.setState({todos:this.state.todos});

    }
    deleteTask(taskToDelete){
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }
}