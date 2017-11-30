import React from 'react'




export default class ToDosListHeader extends React.Component {
	render(){
		return(
				<thead>
					<tr>
						<th>Task</th>
						<th>Action</th>
						<th>Priority</th>
					</tr>
				</thead>
			);
	}
}