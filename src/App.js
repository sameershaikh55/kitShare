import React, { useState } from "react";
import "./App.css";
import { MultiStepForm, Step } from "react-multi-form";
import { Button } from "@material-ui/core";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Succes from "./components/Succes";

function App() {
	// MODAL STATES
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
			imageInp: "",
			productName: "",
			description: "",
		});
	};
	// MODAL HANDLES END
	const [active, setActive] = useState(1);
	return (
		<>
			<Succes handleClose={handleClose} open={open} inpData={inpData} />
			<div className="formContainer">
				<MultiStepForm activeStep={active}>
					<Step label="First Step">
						<StepOne inpData={inpData} handleChange={handleChange} />
					</Step>
					<Step label="Second Step">
						<StepTwo inpData={inpData} handleChange={handleChange} />
					</Step>
					<Step label="Three Step">
						<StepThree inpData={inpData} handleChange={handleChange} />
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
