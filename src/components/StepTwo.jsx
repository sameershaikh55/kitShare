import React from "react";
import { TextField } from "@material-ui/core";
import error from "../assets/error.png";

const StepTwo = ({ inpData, handleChange }) => {
	return (
		<div className="stepTwo">
			<h2>Upload an Image</h2>
			<br />
			<TextField
				name="imageInp"
				value={inpData.imageInp}
				onChange={handleChange}
				className="inp"
				label="Enter Image Link"
			/>
			<br />
			<br />
			<br />
			<div className="imgContainer">
				{(inpData.imageInp && (
					<img src={inpData.imageInp} alt="Product Not Found" />
				)) || <img src={error} alt="" />}
			</div>
		</div>
	);
};

export default StepTwo;
