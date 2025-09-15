import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Car, Clock } from "lucide-react";

function BookingFormModal({ carName, isOpen, onClose }) {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		drivingLicense: "",
		pickupDate: "",
		pickupTime: "",
		dropDate: "",
		dropTime: "",
		duration: "12 Hours",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const whatsappNumber = "917440594711"; // Your WhatsApp number

		const message = `*New Car Booking Request*\n\n` +
			`*Car Name:* ${carName}\n` +
			`*Customer Name:* ${formData.name}\n` +
			`*Phone Number:* ${formData.phone}\n` +
			`*Driving License:* ${formData.drivingLicense}\n` +
			`*Pickup Date:* ${formData.pickupDate}\n` +
			`*Pickup Time:* ${formData.pickupTime}\n` +
			`*Drop Date:* ${formData.dropDate}\n` +
			`*Drop Time:* ${formData.dropTime}\n` +
			`*Booking Duration:* ${formData.duration}`;

		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
		
		window.open(whatsappUrl, "_blank");
		onClose(); // Close modal after generating WhatsApp link
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center p-4"
				>
					<motion.div
						initial={{ y: "-100vh", opacity: 0 }}
						animate={{ y: "0", opacity: 1 }}
						exit={{ y: "100vh", opacity: 0 }}
						transition={{ type: "spring", stiffness: 100, damping: 20 }}
						className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-lg"
					>
						<button
							onClick={onClose}
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
						>
							<X size={24} />
						</button>

						<h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-3">
							<Car size={28} className="text-blue-600" />
							Complete Your Booking
						</h2>

						<form onSubmit={handleSubmit} className="space-y-4 text-zinc-800">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Name"
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
									required
								/>
							</div>

							<div>
								<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="Phone Number"
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
									required
								/>
							</div>

							<div>
								<label htmlFor="drivingLicense" className="block text-sm font-medium text-gray-700 mb-1">
									Driving License Number
								</label>
								<input
									type="text"
									id="drivingLicense"
									name="drivingLicense"
									value={formData.drivingLicense}
									onChange={handleChange}
									placeholder="Enter license number"
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
									required
								/>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">
										Pickup Date
									</label>
									<input
										type="date"
										id="pickupDate"
										name="pickupDate"
										value={formData.pickupDate}
										onChange={handleChange}
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
										required
									/>
								</div>
								<div className="relative">
									<label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">
										Pickup Time
									</label>
									<input
										type="time"
										id="pickupTime"
										name="pickupTime"
										value={formData.pickupTime}
										onChange={handleChange}
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 pr-10"
										required
									/>
									<Clock size={20} className="absolute right-3 top-1/2 mt-3 text-gray-400" />
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label htmlFor="dropDate" className="block text-sm font-medium text-gray-700 mb-1">
										Drop Date
									</label>
									<input
										type="date"
										id="dropDate"
										name="dropDate"
										value={formData.dropDate}
										onChange={handleChange}
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
										required
									/>
								</div>
								<div className="relative">
									<label htmlFor="dropTime" className="block text-sm font-medium text-gray-700 mb-1">
										Drop Time
									</label>
									<input
										type="time"
										id="dropTime"
										name="dropTime"
										value={formData.dropTime}
										onChange={handleChange}
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50 pr-10"
										required
									/>
									<Clock size={20} className="absolute right-3 top-1/2 mt-3 text-gray-400" />
								</div>
							</div>

							<div>
								<label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
									Booking Duration
								</label>
								<select
									id="duration"
									name="duration"
									value={formData.duration}
									onChange={handleChange}
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
								>
									<option value="12 Hours">12 Hours</option>
									<option value="24 Hours">24 Hours</option>
									<option value="48 Hours">48 Hours</option>
									<option value="72 Hours">72 Hours</option>
								</select>
							</div>

							<div className="flex justify-end gap-3 mt-6">
								<button
									type="button"
									onClick={onClose}
									className="px-6 py-3 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
								>
									Submit
								</button>
							</div>
						</form>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default BookingFormModal;
