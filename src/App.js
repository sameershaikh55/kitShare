import React, { useState } from "react";
import "./App.css";
import { MultiStepForm, Step } from "react-multi-form";
import { Button } from "@material-ui/core";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Succes from "./components/Succes";

function App() {
	// MODAL STATES.
	const [open, setOpen] = React.useState(false);

	// INPUT STATES
	const [inpData, setInpData] = useState({
		groupName: "",
		imageInp: "",
		productName: "",
		description: "",
	});

	// INPUT HANDLER START
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInpData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	// INPUT HANDLER END

	// MODAL HANDLES START
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setActive(1);
		setInpData({
			groupName: "",
			productInp: "",
			imageInp: "",
			productName: "",
			description: "",
		});
	};
	// MODAL HANDLES END
	const [active, setActive] = useState(1);

	const productUrl = inpData.imageInp.split("/");
	if (productUrl.indexOf("dp") > 0) {
		const dpIndex = productUrl.indexOf("dp");
		var assin1 = `http://images.amazon.com/images/P/${
			productUrl[dpIndex + 1]
		}.01._SCLZZZZZZZ_.jpg`;
	} else if (productUrl.indexOf("product") > 0) {
		const dpIndex = productUrl.indexOf("product");
		const productIdSplit = productUrl[dpIndex + 1].split("?");
		var assin2 = `http://images.amazon.com/images/P/${productIdSplit[0]}.01._SCLZZZZZZZ_.jpg`;
	}
	const assin = assin1 || assin2;

	return (
		<>
			<Succes
				handleClose={handleClose}
				open={open}
				inpData={inpData}
				assin={assin}
			/>
			<div className="formContainer">
				<MultiStepForm activeStep={active}>
					<Step label="First Step">
						<StepOne inpData={inpData} handleChange={handleChange} />
					</Step>
					<Step label="Second Step">
						<StepTwo
							inpData={inpData}
							handleChange={handleChange}
							assin={assin}
						/>
					</Step>
					<Step label="Three Step">
						<StepThree
							inpData={inpData}
							handleChange={handleChange}
							setActive={setActive}
							assin={assin}
						/>
					</Step>
				</MultiStepForm>
				<br />
				<br />
				{active !== 1 && (
					<Button
						id="btn1"
						variant="outlined"
						onClick={() => setActive(active - 1)}
					>
						Previous
					</Button>
				)}
				{active !== 3 && (
					<Button
						disabled={
							(active === 1 && !inpData.groupName && true) ||
							(active === 2 && !inpData.imageInp && true) ||
							false
						}
						id="btn2"
						variant="contained"
						onClick={() => setActive(active + 1)}
						style={{ float: "right" }}
					>
						Next
					</Button>
				)}
				{active === 3 && (
					<Button
						disabled={
							(active === 3 &&
								!inpData.productName &&
								!inpData.description &&
								true) ||
							false
						}
						id="btn2"
						variant="contained"
						onClick={handleClickOpen}
						style={{ float: "right" }}
					>
						Publish
					</Button>
				)}
			</div>
		</>
	);
}

export default App;
