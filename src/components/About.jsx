import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function AboutUs() {
	const headline = "This Isn't Just About Cars.".split(" ");

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.3 },
		},
	};

	const wordVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<div className="relative w-full bg-oxford_blue text-platinum font-sans overflow-hidden py-16 md:py-40">
			{/* --- 1. Cinematic Car Video Background --- */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20">
				{/* --- UPDATED VIDEO URL --- */}
				<source
					src="https://www.pexels.com/download/video/1572321/" // Example car video
					type="video/mp4"
				/>
			</video>

			<div className="absolute top-0 left-0 w-full h-full bg-rich_black/80 z-10"></div>

			<div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
				<motion.h1
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					// Added hover effect with more intensity
					whileHover={{
						scale: 1.1,
						filter: "drop-shadow(0 0 20px rgba(255, 184, 77, 0.6))",
					}}
					transition={{ type: "spring", stiffness: 300 }}
					className="text-5xl md:text-7xl font-display font-bold tracking-tighter cursor-pointer">
					{headline.map((word, index) => (
						<motion.span
							key={index}
							variants={wordVariants}
							className="inline-block mr-4">
							{word}
						</motion.span>
					))}
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="text-lg md:text-xl text-silver_lake_blue max-w-2xl mx-auto mt-8">
					The Bros Company was founded on a simple, restless
					principle: the best parts of life are not found on the
					sidelines...
				</motion.p>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1, delay: 0.7 }}
					className="text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto mt-4">
					We build the machines that get you there.
				</motion.p>

	
					

					<div>
						<motion.button
							whileHover={{ scale: 1.05 }}
							className="bg-yinmn_blue text-platinum font-bold text-lg px-8 py-4 rounded-full mt-10 hover:bg-silver_lake_blue transition-colors">
							Welcome to The Bros Company.
							
						</motion.button>
					</div>
			
			</div>
		</div>
	);
}

export default AboutUs;
