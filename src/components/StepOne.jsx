import React from "react";
import TextField from "@material-ui/core/TextField";

const StepOne = ({ inpData, handleChange }) => {
	return (
		<div className="stepOne">
			<h2>Create your first "Group"</h2>
			<br />
			<TextField
				name="groupName"
				value={inpData.groupName}
				onChange={handleChange}
				className="inp"
				label="Enter Your Group Name"
			/>
		</div>
	);
};

export default StepOne;
