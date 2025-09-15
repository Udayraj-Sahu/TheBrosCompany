import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // For routing
import { Search, Bell, Download, LogIn, Menu, X } from "lucide-react"; // Icons
import { AnimatePresence } from "framer-motion";

function Navbar() {
	// A more robust links array for routing and special elements
	const links = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Services", path: "/services", hasDot: true }, // Added hasDot property
		{ type: "separator" }, // Special type for the separator
		{ name: "FAQs", path: "/faq" },
		{ name: "Contact", path: "/contact" },
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

	return (
		// Initial slide-in animation for the whole navbar
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="fixed top-0 z-[999] w-full" // Removed max-w for full-width background
		>
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between bg-oxford_blue/90 backdrop-blur-md border-b border-yinmn_blue">
				{/* Left side: Logo */}
				<div className="flex items-center">
					<NavLink to="/" className="magnet-target flex-shrink-0">
						<img
							src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg"
							alt="Logo"
							className="h-8 w-auto"
						/>
					</NavLink>
				</div>

				{/* Mobile Menu Toggle Button (Hamburger) */}
				<div className="md:hidden flex items-center">
					<button
						onClick={toggleMobileMenu}
						className="text-platinum focus:outline-none magnet-target">
						{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Center: Navigation Links */}
				<div className="hidden md:flex items-center gap-10">
					{links.map((link, index) =>
						link.type === "separator" ? (
							<span
								key={index}
								className="w-px h-7 bg-yinmn_blue"></span>
						) : (
							<motion.div
								key={link.name}
								whileHover={{ y: -3 }}
								transition={{ duration: 0.2 }}
								className="magnet-target">
								<NavLink
									key={link.name}
									to={link.path}
									className={({ isActive }) =>
										`text-sm font-medium ${
											isActive
												? "text-platinum"
												: "text-silver_lake_blue hover:text-platinum"
										}`
									}>
									{link.name}
								</NavLink>
							</motion.div>
						)
					)}
				</div>

				{/* Mobile Navigation Overlay */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, x: "100%" }}
							animate={{ opacity: 1, x: "0%" }}
							exit={{ opacity: 0, x: "100%" }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="fixed inset-0 bg-oxford_blue/95 backdrop-blur-lg z-[998] flex flex-col items-center justify-center space-y-8 md:hidden"
						>
							{links.map((link, index) =>
								link.type === "separator" ? (
									<span
										key={index}
										className="w-24 h-px bg-yinmn_blue"></span
									>
								) : (
									<NavLink
										key={link.name}
										to={link.path}
										onClick={toggleMobileMenu} // Close menu on link click
										className="text-platinum text-3xl font-bold hover:text-silver_lake_blue transition-colors"
									>
										{link.name}
									</NavLink>
								)
							)}
						</motion.div>
					)}
				</AnimatePresence>

				{/* Right side: Search and Actions */}
				{/* <div className="flex items-center gap-4">
					<div className="relative magnet-target">
						<input
							type="text"
							placeholder="Search..."
							className="bg-zinc-800 border border-zinc-600 rounded-full py-2 pl-4 pr-8 w-40 text-sm focus:outline-none focus:border-blue-500"
						/>
						<Search
							className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
							size={16}
						/>
					</div>
					<motion.button className="p-2 rounded-full hover:bg-zinc-800 magnet-target">
						<Bell size={20} />
					</motion.button>
					<motion.button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition-opacity magnet-target">
						<Download size={18} /> App
					</motion.button>
					<motion.button className="flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors magnet-target">
						<LogIn size={18} /> Login
					</motion.button>
				</div> */}
			</div>
		</motion.div>
	);
}

export default Navbar;
