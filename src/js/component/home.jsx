import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [isRed, setRed] = useState(false);
	const [isYellow, setYellow] = useState(false);
	const [isGreen, setGreen] = useState(false);
	return (
		<div className="">
			<div className="soporte text-center mx-auto"></div>
			<div className="caja text-center mx-auto">
				<div>
					<button
						onClick={() => {
							setRed(true);
							setYellow(false);
							setGreen(false);
						}}
						className={`${
							isRed === true ? "botonrojo" : ""
						} rounded-circle`}></button>
				</div>
				<div className="">
					<button
						onClick={() => {
							setRed(false);
							setYellow(true);
							setGreen(false);
						}}
						className={`${
							isYellow === true ? "botonamarillo" : ""
						} rounded-circle h-33`}></button>
				</div>
				<div>
					<button
						onClick={() => {
							setRed(false);
							setYellow(false);
							setGreen(true);
						}}
						className={`${
							isGreen === true ? "botonverde" : ""
						} rounded-circle h-33`}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;
