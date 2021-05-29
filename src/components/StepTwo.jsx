import React from "react";
import { Button, TextField } from "@material-ui/core";
import error from "../assets/error.png";

const StepTwo = ({ inpData, handleChange, assin, handleSubmit, webSer }) => {
	return (
		<div className="stepTwo">
			<h2>Upload an Image</h2>
			<br />
			<div className="ingInpContainer">
				<TextField
					name="imageInp"
					value={inpData.imageInp}
					onChange={handleChange}
					className="inp"
					label="Enter Product Link"
				/>
				<Button
					id="btn2"
					variant="contained"
					className="btnSubmit"
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</div>
			{/* <button onClick={handleSubmit}>submit</button> */}
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
			<div className="imgContainer">
				{(webSer && (
					<a href={webSer.url} target="blank">
						<>
							<img src={webSer.images[0]} alt="Product Not Found" />
						</>
					</a>
				)) ||
					(assin && (
						<a href={inpData.imageInp} target="blank">
							<>
								<img src={assin} alt="Product Not Found" />
							</>
						</a>
					)) || <img src={error} alt="" />}
			</div>
		</div>
	);
};

export default StepTwo;
