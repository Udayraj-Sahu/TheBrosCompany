import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
	const links = [
		{ label: "Home", ariaLabel: "Go to home page", link: "/" },
		{ label: "About", ariaLabel: "Learn about us", link: "/about" },
		{ label: "Services", ariaLabel: "View our services", link: "/services" },
		{ label: "FAQs", ariaLabel: "Frequently Asked Questions", link: "/faq" },
		{ label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
	];

	useEffect(() => {
		if (window.Shery) {
			Shery.makeMagnet(".magnet-target");
		}
	}, []);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	return (
		<>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				className="fixed top-0 z-[999] w-full"
			>
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between bg-oxford_blue/90 backdrop-blur-md border-b border-yinmn_blue h-[64px]">
					<NavLink to="/" className="magnet-target flex-shrink-0">
						<div className="text-xl md:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text drop-shadow-lg font-playfair">
							THE BRO'S CAR COMPANY
						</div>
					</NavLink>

					<div className="hidden md:flex items-center gap-10">
						{links.map((link) => (
							<motion.div
								key={link.label}
								whileHover={{ y: -3 }}
								transition={{ duration: 0.2 }}
								className="magnet-target"
							>
								<NavLink
									to={link.link}
									className={({ isActive }) =>
										`text-sm font-medium ${
											isActive
												? "text-platinum"
												: "text-silver_lake_blue hover:text-platinum"
										}`
									}
								>
									{link.label}
								</NavLink>
							</motion.div>
						))}
					</div>

					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMobileMenu}
							className="text-platinum focus:outline-none"
						>
							{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</motion.div>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="fixed inset-0 bg-oxford_blue/90 backdrop-blur-md z-[9999] md:hidden flex flex-col items-center justify-start space-y-6 px-4 py-20 overflow-y-auto"
					>
						{links.map((link, index) => (
							<NavLink
								key={index}
								to={link.link}
								onClick={toggleMobileMenu}
								className={({ isActive }) =>
									`text-3xl font-semibold ${
										isActive ? "text-platinum" : "text-silver_lake_blue hover:text-platinum"
									}`
								}
							>
								{link.label}
							</NavLink>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
