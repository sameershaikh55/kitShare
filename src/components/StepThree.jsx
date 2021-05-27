import { TextField } from "@material-ui/core";
import React from "react";
import { RiImageEditLine } from "react-icons/ri";

const StepThree = ({ inpData, handleChange, setActive }) => {
	const productUrl = inpData.imageInp.split("/");
	const dpIndex = productUrl.indexOf("dp");
	var assin = `http://images.amazon.com/images/P/${
		productUrl[dpIndex + 1]
	}.01._SCTZZZZZZZ_.jpg`;
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
				<br />
				<div className="imgContainer">
					<a href={inpData.imageInp} target="blank">
						<img src={assin} alt="" />
					</a>
					<RiImageEditLine onClick={() => setActive(2)} className="editBtn" />
				</div>
			</div>
		</div>
	);
};

export default StepThree;
