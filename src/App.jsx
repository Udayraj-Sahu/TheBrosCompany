import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FaqsPage from "./pages/FaqsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loading"; // New loader component

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Initialize Locomotive Scroll
		const locomotiveScroll = new LocomotiveScroll();

		// Simulate loading
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />; // Show Lottie loader until done
	}

	return (
		<div className="bg-zinc-800 text-white overflow-visible">
			<Navbar />
			<ScrollToTop />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route path="/faq" element={<FaqsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
