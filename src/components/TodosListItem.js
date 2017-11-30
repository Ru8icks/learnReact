import React from 'react';




export default class ToDosListItem extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isEditing: false,
			value: this.props.priority
		};
	}
    handleChange(event){
        console.log("ch ch changes")
        this.setState({value:event.target.value});
    }
	renderTaskSection(){
		const {task, isCompleted} = this.props;

		const taskStyle = {
			color: isCompleted ? 'green' : 'red',
			cursor: 'pointer'
		};
		if (this.state.isEditing){
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)} >
						<input type="text" defaultValue={task} ref="editInput" />
					</form>
				</td>
			)
		}
		return(
		<td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>

			{task}
		</td>
        );
	}
	renderPrioritySection(){
        const pri = this.props.priority;
        let color;
        if (pri==='low'){
        	color='green';
		} else if (pri==='medium'){
        	color='orange'
		} else {
			color='red'
		}
		const priorityStyle = {
			color: color
		};
		console.log(color);
        if (this.state.isEditing){
        	return (
        	<td>
				<select value={this.state.value} onChange={this.handleChange.bind(this)}>
					<option value="low">low</option>
					<option value="medium">medium</option>
					<option value="high">high</option>
				</select>
			</td>
            )
		}

 		return(

			<td style={priorityStyle}>
				{pri}
			</td>
		)
	}

	renderActionsSection(){
		if(this.state.isEditing){
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
				);
		}
		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
			</td>
			);
	}
	render(){
		return(
				<tr>
					{this.renderTaskSection()}
					{this.renderActionsSection()}
					{this.renderPrioritySection()}
					
				</tr>
			);
	}
	onEditClick(){
		this.setState({isEditing:true});
	}
	onCancelClick(){
		this.setState({isEditing:false});

	}
	onSaveClick(event){
		event.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		this.props.saveTask(oldTask, newTask, this.state.value);
		this.setState({ isEditing:false});


	}

}