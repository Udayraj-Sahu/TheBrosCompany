import React, { useState, useRef } from "react";
import CarCard from "./CarCard";
import { motion, useInView } from "framer-motion";
import { carData } from "../data/carData";
import { ArrowRight } from "lucide-react";
// import BookingFormModal from "./BookingFormModal"; // Removed

// Enhanced CarCard component with tilting animation
function TiltedCarCard({ car, index }) {
	const cardInViewRef = useRef(null);
	const isInView = useInView(cardInViewRef, {
		once: true,
		margin: "-100px 0px -100px 0px",
	});

	// const [isModalOpen, setIsModalOpen] = useState(false);

	const handleBookNowClick = () => {
		// setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		// setIsModalOpen(false);
	};

	return (
		<motion.div
			ref={cardInViewRef}
			className="relative cursor-default"
			initial={{ opacity: 0, y: 80, scale: 0.8 }}
			animate={
				isInView
					? {
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								duration: 0.8,
								delay: index * 0.15,
								ease: [0.25, 0.4, 0.25, 1],
							},
					  }
					: {}
			}>
			{/* Card content with enhanced styling */}
			<motion.div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
				{/* Discount badge */}
				{car.discount && (
					<div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold z-10">
						{car.discount}% OFF
					</div>
				)}

				{/* Car image */}
				<div className="aspect-[4/3] overflow-hidden">
					<img
						src={car.image}
						alt={car.name}
						className="w-full h-full object-cover transition-transform duration-300"
					/>
				</div>

				{/* Car info */}
				<div className="p-4">
					{/* Car Name */}
					<h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
						{car.name}
					</h3>

					{/* Car specifications in grid */}
					<div className="grid grid-cols-2 gap-3 mb-4 text-sm">
						{/* Left column */}
						<div className="space-y-3">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded flex-shrink-0"></div>
								<span className="text-gray-600">
									{car.transmission || "Manual"}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded flex-shrink-0"></div>
								<span className="text-gray-600">
									{car.fuel || "Diesel"}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded flex-shrink-0"></div>
								<span className="text-gray-600">
									{car.seating || "4"} Person
									{(car.seating || 4) > 1 ? "s" : ""}
								</span>
							</div>
						</div>

						{/* Right column */}
						<div className="space-y-3">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded flex-shrink-0"></div>
								<span className="text-gray-600">
									{car.mileage || "15"}km
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded flex-shrink-0"></div>
								<span className="text-gray-600">
									{car.driveType ||
										"Self-Drive & Without Fuel"}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded flex-shrink-0"></div>
								<span className="text-gray-600">
									{car.ac ? "AC" : "Non-AC"}
								</span>
							</div>
						</div>
					</div>

					{/* Location and pricing */}
					<div className="flex items-center justify-between mb-4 text-sm">
						<div className="flex items-center gap-1">
							<div className="w-4 h-4 bg-gray-300 rounded flex-shrink-0"></div>
							<span className="text-gray-600">
								{car.location || "Indore (M.P)"}
							</span>
						</div>
						<div className="text-right">
							<div className="font-bold text-base sm:text-lg">
								{car.price || "₹3000"}/12hour &{" "}
								{car.dailyPrice || "₹5000"}/- 24 hours
							</div>
							<div className="text-xs text-gray-500">
								Extra km fare: {car.extraKmFare || "₹7/KM"}
							</div>
						</div>
					</div>

					{/* Book Now Button */}
					<button
						onClick={handleBookNowClick}
						className={`w-full py-2 rounded font-semibold transition-all duration-200 ${
							car.available !== false
								? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
								: "bg-gray-400 text-white cursor-not-allowed"
						}`}>
						{car.available !== false ? "Book Now" : "Not Available"}
					</button>
				</div>

				{/* Hover overlay content */}
				{/* <BookingFormModal
					carName={car.name}
					isOpen={isModalOpen}
					onClose={handleCloseModal}
				/> */}
			</motion.div>
		</motion.div>
	);
}
export default TiltedCarCard;
