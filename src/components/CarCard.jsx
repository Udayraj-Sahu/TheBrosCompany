import React, { useState } from "react";
import { Car, Fuel, Users, Snowflake} from "lucide-react";
import { motion } from "framer-motion";
// import BookingFormModal from "./BookingFormModal"; // Removed

function CarCard({ car, onBookNow }) {
	// If for any reason a car object isn't passed, show nothing to prevent a crash.
	if (!car) {
		return null;
	}

	// const [isModalOpen, setIsModalOpen] = useState(false);

	const handleBookNowClick = () => {
		onBookNow(car.name); // Call the prop function
		// setIsModalOpen(true);
	};
	// const handleCloseModal = () => {
	//	setIsModalOpen(false);
	// };

	return (
		<motion.div
			className="bg-white text-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
			whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
			transition={{ duration: 0.0001, ease: "easeInOut" }}
		>
			<div className="relative">
				<img
					src={car.image}
					alt={car.name}
					className="w-full h-48 sm:h-56 object-cover"
				/>
				{car.discount && (
					<div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-md">
						{car.discount}
					</div>
				)}
			</div>

			<div className="p-4 flex-grow">
				<h2 className="text-2xl font-bold mb-4">{car.name}</h2>

				{/* --- FIX STARTS HERE --- */}
				{/* Replaced the .map() with a static grid that displays individual properties */}
				<div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-zinc-600">
					<div className="flex items-center gap-2">
						<span>{car.transmission}</span>
					</div>
					<div className="flex items-center gap-2">
						<Fuel size={18} />
						<span>{car.fuelType}</span>
					</div>
					<div className="flex items-center gap-2">
						<Users size={18} />
						<span>{car.seats} Persons</span>
					</div>
					<div className="flex items-center gap-2">
						<Snowflake size={18} />
						<span>A/C</span>
					</div>
				</div>
				{/* --- FIX ENDS HERE --- */}

				<div className="border-t border-zinc-200 mt-4 pt-4">
					<p className="text-sm text-zinc-600">
						<strong>Location:</strong> Indore (MP)
					</p>
					<p className="text-lg font-semibold text-zinc-800 mt-2">
						₹{car.price} / Day
					</p>
				</div>
			</div>

			<div className="p-4 bg-gray-50">
				{car.available ? (
					<button
						onClick={handleBookNowClick}
						className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
						Book Now
					</button>
				) : (
					<button className="w-full bg-gray-300 text-gray-500 font-bold py-3 rounded-lg cursor-not-allowed">
						Not Available
					</button>
				)}
			</div>
			{/* <BookingFormModal
				carName={car.name}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/> */}
		</motion.div>
	);
}

export default CarCard;
