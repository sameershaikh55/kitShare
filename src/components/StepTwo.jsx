import React from "react";
import { TextField } from "@material-ui/core";

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
				)) || (
					<img
						src="https://lh3.googleusercontent.com/proxy/1ak-9uH_yil7H_S3ydxmSnCDSwOhC0rT_yxwSiwHV64Cd1l-qeJypeFNdqYuWpuz9kUbQZdZc64ysQxXCNiv2VQ8YfVQKmFE2yxleS_I1OwcRqgIN8YfaqRwELFz3PnKyp3Nn3M"
						alt=""
					/>
				)}
			</div>
		</div>
	);
};

export default StepTwo;
