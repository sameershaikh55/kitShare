import { TextField } from "@material-ui/core";
import React from "react";

const StepThree = ({ inpData, handleChange }) => {
	return (
		<div className="stepThree">
			<h2>Add Details</h2>
			<br />
			<TextField
				name="productName"
				value={inpData.productName}
				onChange={handleChange}
				className="inp"
				label="Product Name"
			/>
			<br />
			<br />
			<TextField
				name="description"
				value={inpData.description}
				onChange={handleChange}
				className="inp"
				label="Describe"
			/>
			<br />
			<br />
			<div>
				<h2>Product Image</h2>
				<div className="imgContainer">
					<img src={inpData.imageInp} alt="" />
				</div>
			</div>
		</div>
	);
};

export default StepThree;
