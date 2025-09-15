import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/loading/Circle Car.json"; // adjust path
// Put your Lottie file inside src/assets

function Loader() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
			<Lottie
				animationData={animationData}
				loop={true}
				className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
			/>
		</div>
	);
}

export default Loader;
