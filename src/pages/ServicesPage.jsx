import React, { useState, useEffect } from "react";
import { carData } from "../data/carData";
import CarCard from "../components/CarCard";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import BookingFormModal from "../components/BookingFormModal";

function ServicesPage() {
	const [cars, setCars] = useState(carData);
	const [searchTerm, setSearchTerm] = useState("");
	const [filters, setFilters] = useState({
		available: false,
		fuelType: [],
		// Price range can be added here, e.g., price: [0, 10000]
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCarName, setSelectedCarName] = useState("");

	const handleBookNowClick = (carName) => {
		setSelectedCarName(carName);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedCarName("");
	};

	useEffect(() => {
		let filtered = carData;

		// Apply search filter
		if (searchTerm) {
			filtered = filtered.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		// Apply availability filter
		if (filters.available) {
			filtered = filtered.filter((car) => car.available);
		}

		// Apply fuel type filter
		if (filters.fuelType.length > 0) {
			filtered = filtered.filter((car) =>
				filters.fuelType.includes(car.fuelType)
			);
		}

		// Sort by availability (available cars first)
		filtered.sort((a, b) => (a.available === b.available ? 0 : a.available ? 1 : -1));

		setCars(filtered);
	}, [searchTerm, filters]);

	const handleFilterChange = (e) => {
		const { name, value, checked, type } = e.target;

		if (name === "available") {
			setFilters((prev) => ({ ...prev, available: checked }));
		} else if (name === "fuelType") {
			const currentFuelTypes = filters.fuelType;
			if (checked) {
				setFilters((prev) => ({
					...prev,
					fuelType: [...currentFuelTypes, value],
				}));
			} else {
				setFilters((prev) => ({
					...prev,
					fuelType: currentFuelTypes.filter((ft) => ft !== value),
				}));
			}
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="pb-20 bg-zinc-800">
			<div className="w-full min-h-screen bg-zinc-900 pt-32 pb-20 px-4 sm:px-6 md:px-10">
				<div className="">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="bg-zinc-800 p-6 rounded-lg mb-12 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
						<div className="relative flex-grow w-full">
							<input
								type="text"
								placeholder="Search by car name..."
								className="w-full bg-zinc-700 text-white rounded-full py-3 px-6 focus:outline-none"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<Search className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400" />
						</div>
						<div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-white">
							<label className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									name="available"
									onChange={handleFilterChange}
									className="h-5 w-5 rounded"
								/>
								Available Now
							</label>
							<div className="border-l border-zinc-600 h-6 hidden sm:block"></div>
							<div className="flex items-center gap-2 sm:gap-4">
								<span>Fuel:</span>
								<label>
									<input
										type="checkbox"
										name="fuelType"
										value="Petrol"
										onChange={handleFilterChange}
									/>{" "}
									Petrol
								</label>
								<label>
									<input
										type="checkbox"
										name="fuelType"
										value="Diesel"
										onChange={handleFilterChange}
									/>{" "}
									Diesel
								</label>
								<label>
									<input
										type="checkbox"
										name="fuelType"
										value="CNG"
										onChange={handleFilterChange}
									/>{" "}
									CNG
								</label>
							</div>
						</div>
					</motion.div>

					{/* Car Grid */}
					{cars.length > 0 ? (
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.4 }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8">
							{cars.map((car) => (
								<CarCard key={car.id} car={car} onBookNow={handleBookNowClick} />
							))}
						</motion.div>
					) : (
						<div className="text-center py-20">
							<h2 className="text-3xl text-white font-semibold">
								No Cars Found
							</h2>
							<p className="text-zinc-400 mt-2">
								Try adjusting your search or filters.
							</p>
						</div>
					)}
				</div>
			</div>
			<BookingFormModal
				carName={selectedCarName}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</motion.div>
	);
}

export default ServicesPage;
