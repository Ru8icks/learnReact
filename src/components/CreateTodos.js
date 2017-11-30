import _ from 'lodash';
import React from 'react'


export default class CreateTodos extends React.Component {
	constructor(props){
		super(props);



		this.state = {
			error : null,
            value:""
		};
        this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		console.log("ch ch changes")
		this.setState({value:event.target.value});
	}
	renderError(){
		if (!this.state.error){return null;}

		return <div style={{ color: 'red'}}>{this.state.error}</div>

	}

	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What do I need to do?" ref="createInput" />
				<button>Create</button>
				<select value={this.state.value} onChange={this.handleChange.bind(this)}>
					<option value="" disabled>Select task priority</option>
					<option value="low">low</option>
					<option value="medium">medium</option>
					<option value="high">high</option>
				</select>
				{this.renderError()}
			</form>
			);
	}
	handleCreate(event){
		event.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const priority = this.state.value;
		const validateInput = this.validateInput(task,priority );
		if(validateInput){
			this.setState({error:validateInput});
			return;
		}

		this.setState({error:null});

		this.props.createTask(task);
		this.refs.createInput.value='';


	}
	validateInput(task,priority){
		if (!task){
			return 'please enter a task'
		} else if( _.find(this.props.todos, todo => todo.task === task)){
			return 'task already exists'
		} else if(priority===""){
			return 'select task priority'

		}
		else{
			return null;
		}
	}
}