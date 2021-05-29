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

	const [assin, setAssin] = useState();
	const [webSer, setWebSer] = useState();

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
		setWebSer();
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

	const handleSubmit = async () => {
		const productUrl = inpData.imageInp.split("/");
		if (productUrl.indexOf("dp") > 0) {
			const dpIndex = productUrl.indexOf("dp");
			var assin1 = `http://images.amazon.com/images/P/${
				productUrl[dpIndex + 1]
			}.01._SCLZZZZZZZ_.jpg`;
			setAssin(assin1);
		} else if (productUrl.indexOf("product") > 0) {
			const dpIndex = productUrl.indexOf("product");
			const productIdSplit = productUrl[dpIndex + 1].split("?");
			var assin2 = `http://images.amazon.com/images/P/${productIdSplit[0]}.01._SCLZZZZZZZ_.jpg`;
			setAssin(assin2);
		} else if (
			productUrl.indexOf("dp") <= 0 &&
			productUrl.indexOf("product") <= 0
		) {
			const data = inpData.imageInp;
			const data2 = encodeURIComponent(data);
			const dataFetch = await fetch(
				`http://opengraph.io/api/1.1/site/${data2}?app_id=1224dd6b-2a14-47ea-a3e3-5e46ca53cedc`
			);
			const {
				htmlInferred: { images, url },
			} = await dataFetch.json();
			setWebSer({ images, url });
		}
		// var assin = assin1 || assin2;
	};

	return (
		<>
			<Succes
				handleClose={handleClose}
				open={open}
				inpData={inpData}
				assin={assin}
				webSer={webSer}
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
							handleSubmit={handleSubmit}
							webSer={webSer}
						/>
					</Step>
					<Step label="Three Step">
						<StepThree
							inpData={inpData}
							handleChange={handleChange}
							setActive={setActive}
							assin={assin}
							webSer={webSer}
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
