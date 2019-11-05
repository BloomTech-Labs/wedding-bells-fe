import React from "react";

function Guest({
	name,
	email,
	going,
	response,
	plusOne,
	id,
	onUpdate,
	onSubmit,
	onDelete,
	editMe,
	deleteMe,
}) {
	<React.Fragment>
		<tr>
			<th>{id}</th>
			<td>{name}</td>
			<td>{email}</td>
			<td>{going}</td>
			<td>{response}</td>
			<td>{plusOne}</td>
			<td className="editMe">
				<a href={onUpdate} target="_blank" rel="noopener noreferrer">
					<img alt="edit" src={require("../../assets/pencil.svg")} />
				</a>
			</td>
			<td className="deleteMe">
				<a href={onDelete} target="_blank" rel="noopener noreferrer">
					<img alt="delete" src={require("../../assets/delete.svg")} />
				</a>
			</td>
		</tr>
	</React.Fragment>;
}
