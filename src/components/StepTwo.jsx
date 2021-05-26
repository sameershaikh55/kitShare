import React from "react";
import { TextField } from "@material-ui/core";
import error from "../assets/error.png";

const StepTwo = ({ inpData, handleChange }) => {
	const [state, setState] = React.useState("");
	console.log(state);
	const productUrl = state.split("/");
	const dpIndex = productUrl.indexOf("dp");
	console.log(productUrl);
	const assin = `http://images.amazon.com/images/P/${
		productUrl[dpIndex + 1]
	}.01._SCTZZZZZZZ_.jpg`;
	return (
		<div className="stepTwo">
			<h2>Upload an Image</h2>
			<br />
			<TextField
				name="productInp"
				value={state}
				onChange={(e) => setState(e.target.value)}
				className="inp"
				label="Enter Product Link"
			/>
			{/* <TextField
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
			/> */}
			<br />
			<br />
			<br />
			{/* <div className="imgContainer">
				{(inpData.imageInp && (
					<a href={inpData.productInp} target="blank">
						<>
							<img src={inpData.imageInp} alt="Product Not Found" />
						</>
					</a>
				)) || <img src={error} alt="" />}
			</div> */}
			<div className="imgContainer">
				<img src={assin} alt="Product Not Found" />
			</div>
		</div>
	);
};

export default StepTwo;
