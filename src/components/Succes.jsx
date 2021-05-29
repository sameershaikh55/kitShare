import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import error from "../assets/error.png";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Succes = ({ open, handleClose, inpData, assin, webSer }) => {
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
