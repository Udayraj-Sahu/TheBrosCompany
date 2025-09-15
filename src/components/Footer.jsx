import React from "react";
import { motion } from "framer-motion";

function Footer() {
	const headlineText = "START YOUR JOURNEY.";

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.05 },
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", damping: 15, stiffness: 100 },
		},
	};

	return (
		<div className="w-full bg-oxford_blue text-platinum  bg-zinc-900 text-white font-sans">
			<div className="max-w-screen-xl mx-auto py-10 md:py-20 px-4 sm:px-10">
				{/* --- Section 1: Main Call to Action --- */}
				<div className="text-center">
					<motion.h1
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						// THE FIX: Added 'whitespace-nowrap' to prevent the headline from wrapping
						className="text-6xl md:text-8xl lg:text-9xl font-semibold leading-none tracking-tighter whitespace-nowrap"
						aria-label={headlineText}>
						{headlineText.split("").map((char, index) => (
							<motion.span
								key={index}
								variants={childVariants}
								className="inline-block">
								{char === " " ? "\u00A0" : char}
							</motion.span>
						))}
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="mt-10">
						<a
							className="inline-block border-[1px] border-amber rounded-full py-3 px-8 text-amber text-lg font-semibold hover:bg-amber hover:text-charcoal transition-colors"
							href="#">
							Get a Quote
						</a>
						<p className="mt-4 text-zinc-400">
							or email us at{" "}
							<a
								href="mailto:thebroscompany@gmail.com"
								className="text-white hover:text-amber">
								thebroscompany@gmail.com
							</a>
						</p>
					</motion.div>
				</div>

				{/* --- Section 2: Links, Socials, and Copyright --- */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 1 }}
					className="border-t-[1px] border-zinc-700 mt-16 md:mt-24 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
					<div className="mb-6 md:mb-0">
						<h3 className="font-semibold text-silver_lake_blue text-xl mb-2">
							The Bros Company
						</h3>
						<p className="text-zinc-400">
							© 2025. All Rights Reserved.
						</p>
					</div>

					<div className="flex gap-4 sm:gap-10 text-zinc-400">
						<a
							href="https://www.instagram.com/the_bros_car_company/"
							className="hover:text-white transition-colors">
							Instagram
						</a>
					
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Footer;
