import React from "react";
import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCars";
import AboutUs from "../components/About"; // The full AboutUs can be a section here too
import Marquee from "../components/Marquee";

function HomePage() {
	return (
		<>
			<Hero />
			<Marquee />
			<FeaturedCars />
			<AboutUs />
		</>
	);
}

export default HomePage;
