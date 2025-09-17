import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
	const targetRef = useRef(null);

	// useScroll tracks how far the user has scrolled within the targetRef element
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end start"], // Animation starts when the top of the hero hits the top of the viewport, and ends when the bottom of the hero hits the top of the viewport.
	});

	// useTransform maps the scroll progress (a value from 0 to 1) to other values.
	// This makes the background image move slower than the scroll speed.
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	// Marquee-style horizontal movement for text
	const textX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["100%", "0%", "0%", "-100%"]); // Adjusted values for right-to-center and then off-left
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // Changed from ["25%", "-50%"]
	const textOpacity = useTransform(
		scrollYProgress,
		[0, 0.1, 0.9, 1],
		[1, 1, 1, 0] // Adjusted values to keep it opaque longer and then fade out
	);

	return (
		<section
			ref={targetRef}
			className="h-screen w-full relative bg-rich_black overflow-hidden">
			{/* Background Image with Parallax Effect */}
			<motion.div
				className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
				style={{
					// --- CHANGE YOUR IMAGE HERE ---
					backgroundImage: `url('/car-sequence/frame-001.jpg')`,
					y: backgroundY, // Apply the parallax motion value
				}}
			/>
			{/* Dark Overlay for Text Readability */}
			<div className="absolute inset-0 z-10 bg-oxford_blue/70" />

			{/* Text Content with Diagonal Animation */}
			<motion.div
				style={{
					x: textX, // Horizontal movement: right to left
					y: textY, // Vertical movement: bottom to center
					opacity: textOpacity, // Apply the fade-out effect
				}}
				className="relative z-20 h-full flex flex-col items-center justify-center text-center text-platinum will-change-transform will-change-opacity">
				<h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter">
					"Your Journey, Your Car, Your Rules!"
				</h1>
				<p className="text-lg md:text-xl mt-4 max-w-2xl text-silver_lake_blue">
					Choose from the best self-drive cars in Indore and hit the
					road with ease.
				</p>
			</motion.div>

			{/* Alternative: Continuous Marquee Text (Independent of Scroll) */}
			<div className="absolute bottom-10 left-0 w-full z-30 overflow-hidden md:bottom-20">
				<motion.div
					initial={{ x: "100%" }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeat: Infinity,
						duration: 15,
					}}
					className="flex items-center whitespace-nowrap will-change-transform">
					<span className="text-2xl md:text-4xl font-bold text-platinum uppercase tracking-wider">
						Premium Self-Drive Cars • Luxury Vehicles • Book Now •
						24/7 Support •
					</span>
					<span className="text-2xl md:text-4xl font-bold text-platinum uppercase tracking-wider ml-20">
						Premium Self-Drive Cars • Luxury Vehicles • Book Now •
						24/7 Support •
					</span>
				</motion.div>
			</div>
		</section>
	);
}

export default Hero;
