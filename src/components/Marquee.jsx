import React from "react";
import { motion } from "framer-motion";

function Marquee() {
	const imageUrls = [
		"https://brandlogos.net/wp-content/uploads/2014/11/jaguar_cars-logo_brandlogos.net_41vlk-512x512.png",
		"https://brandlogos.net/wp-content/uploads/2021/11/volvo_cars-brandlogo.net_-300x300.png",
		"https://brandlogos.net/wp-content/uploads/2020/09/volvo_wordmark-logo_brandlogos.net_pu20e-300x300.png",
		"https://brandlogos.net/wp-content/uploads/2021/10/BMW-M-logo-1-300x106.png",
		"https://brandlogos.net/wp-content/uploads/2021/10/porsche-logo-300x300.png",
		"https://brandlogos.net/wp-content/uploads/2014/10/bentley-logo-300x300.png",
	];

	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="0.1"
			className="w-full py-10 md:py-20 relative z-30 bg-[#004D43]">
			<div className="text-white border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
				<motion.div
					initial={{ x: "0" }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeat: Infinity,
						duration: 10,
					}}
					className="flex gap-10 md:gap-20 items-center py-4 md:py-6 pr-10 md:pr-20">
					{imageUrls.map((url, index) => (
						<img key={index} src={url} alt="" className="w-24 md:w-32" />
					))}
					{imageUrls.map((url, index) => (
						<img key={index} src={url} alt="" className="w-24 md:w-32" />
					))}
				</motion.div>
			</div>
		</div>
	);
}

export default Marquee;
