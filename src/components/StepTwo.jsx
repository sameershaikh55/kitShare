import React from "react";
import { TextField } from "@material-ui/core";
import error from "../assets/error.png";

const StepTwo = ({ inpData, handleChange }) => {
	return (
		<div className="stepTwo">
			<h2>Upload an Image</h2>
			<br />
			<TextField
				name="productInp"
				value={inpData.productInp}
				onChange={handleChange}
				className="inp"
				label="Enter Product Link"
			/>
			<br />
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
					<a href={inpData.productInp} target="blank">
						<>
							<img src={inpData.imageInp} alt="Product Not Found" />
						</>
					</a>
				)) || <img src={error} alt="" />}
			</div>
		</div>
	);
};

export default StepTwo;
