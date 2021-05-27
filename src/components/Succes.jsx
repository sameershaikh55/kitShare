import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Succes = ({ open, handleClose, inpData, assin }) => {
	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<div className="successMain">
					<a href={inpData.imageInp} target="blank">
						<img src={assin} alt="" />
					</a>
					<div className="succesCont">
						<h3>{inpData.productName}</h3>
						<h5>{inpData.description}</h5>
						<br />
						<Button
							onClick={handleClose}
							className="succesBtn"
							variant="contained"
						>
							Go Back
						</Button>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default Succes;
