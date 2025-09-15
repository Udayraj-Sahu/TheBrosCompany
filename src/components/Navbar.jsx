import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // For routing
import { Search, Bell, Download, LogIn, Menu, X } from "lucide-react"; // Icons
import { AnimatePresence } from "framer-motion";
// import StaggeredMenu from "./StaggeredMenu";

function Navbar() {
	// A more robust links array for routing and special elements
	const links = [
		{ label: "Home", ariaLabel: "Go to home page", link: "/" },
		{ label: "About", ariaLabel: "Learn about us", link: "/about" },
		{ label: "Services", ariaLabel: "View our services", link: "/services" },
		{ label: "FAQs", ariaLabel: "Frequently Asked Questions", link: "/faq" },
		{ label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
	];

	// Class function for active NavLink styling
	const navLinkClass = ({ isActive }) =>
		`font-regular text-sm flex items-center gap-2 cursor-pointer ${
			isActive ? "text-white" : "text-zinc-400 hover:text-white"
		}`;

	// useEffect to apply SheryJS magnet effect after component mounts
	useEffect(() => {
		if (window.Shery) {
			Shery.makeMagnet(".magnet-target");
		}
	}, []);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

    const navbarHeight = "64px"; // Approximate height of the main navbar

	return (
		// Initial slide-in animation for the whole navbar
		<>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				className="fixed top-0 z-[999] w-full"
			>
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between bg-oxford_blue/90 backdrop-blur-md border-b border-yinmn_blue h-[64px]">
					{/* Left side: Logo */}
					<div className="flex items-center">
						<NavLink to="/" className="magnet-target flex-shrink-0">
							<img
								src="https://assets-global.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg"
								alt="The Bros Car Company Logo"
								className="h-8 w-auto"
							/>
						</NavLink>
					</div>

					{/* Center: Navigation Links (Desktop) */}
					<div className="hidden md:flex items-center gap-10">
						{links.map((link) => (
							<motion.div
								key={link.label}
								whileHover={{ y: -3 }}
								transition={{ duration: 0.2 }}
								className="magnet-target"
							>
								<NavLink
									key={link.label}
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

					{/* Mobile Menu Toggle Button (Hamburger/X) */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMobileMenu}
							className="text-platinum focus:outline-none magnet-target"
						>
							{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</motion.div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ type: "tween", stiffness: 100, damping: 20 }}
						className="fixed inset-0 bg-oxford_blue z-[9999] md:hidden flex flex-col items-center justify-start space-y-6 px-4 py-20 overflow-y-auto"
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
