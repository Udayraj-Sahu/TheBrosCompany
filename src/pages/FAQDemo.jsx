
import React from "react";
import { FAQ } from "../components/ui/faq-tabs";

const FAQDemo = () => {
	const categories = {
		"about-us": "About Us",
		"booking-info": "Booking Information",
		"car-details": "Car Details",
		"policies": "Policies",
	};

	const faqData = {
		"about-us": [
			{
				question: "What is Bros Car Company?",
				answer: "The Bros Car Company is a self-drive car rental service that provides you with all the privacy, fun, and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important thing - your drive! Our doorstep drop and pick-up service is our standard way of serving you and is available throughout the areas we serve.",
			},
			{
				question: "Is Bros Car Company 24/7?",
				answer: "Yes, The Bros Car Company is accessible 24x7.",
			},
		],
		"booking-info": [
			{
				question: "Am I eligible to use Bros Car Company's services?",
				answer: "To avail The Bros Car Company's services, you must be at least 21 years old, and your driving license for 'Light Motor Vehicles' must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted.",
			},
			{
				question: "Can I book for any duration of time?",
				answer: "For rentals, the minimum booking duration is 8 hours, and the maximum is up to 90 days. If you need a car for a longer period of time, please try The Bros Car Company subscriptions, wherein you can subscribe to a car for a minimum of 1 month and a maximum of 36 months. Check out our subscriptions page for more details.",
			},
			{
				question: "Home / Airport Vehicle Pick-up and Drop",
				answer: "Home delivery or airport delivery will be available at an additional fee plus the distance fee subject to availability and ongoing offers. The vehicle will be delivered to the specified location selected during booking creation, 0-5 minutes prior to the booking start time, and the vehicle will be picked up within 30 minutes from the booking end time. The Guest may end the trip before completion of the booking end time. The Guest shall not be charged if he/she has ended the trip before the booking end time and the car is yet to be picked up by the delivery executive of The Bros Car Company.",
			},
			{
				question: "Minimum Duration",
				answer: "The minimum booking duration (also referred to as the \"minimum billing duration\") for which a booking can be made by the Guest will be at least 48 hours. No booking under such duration will be entertained by The Bros Car Company on its Platform.",
			},
		],
		"car-details": [
			{
				question: "Which are the areas where I can avail Bros Car Company's services?",
				answer: "We are currently serving in Indore, Madhya Pradesh, India.",
			},
			{
				question: "Is there a 'Kilometres limit' to how much I can drive?",
				answer: "This depends on the pricing plan that you select. If you go for the \"Unlimited kms\" pricing plans (available only without fuel and only for bookings whose duration is more than 72 hours), there is absolutely no limit to the kilometres that you can drive, and you have complete flexibility of driving the car as much as you want. The Bros Car Company it up! Other pricing plans have a 'Kilometres limit', which varies based on the plan selected. You can still drive beyond the kilometres limit, but the additional kilometres clocked will attract an additional charge.",
			},
			{
				question: "Are there restrictions on where I can travel?",
				answer: "All of our cars are equipped with an All India Tourist Permit, so you are free to drive anywhere in the country. This means that the car is legally permitted to ply in any state in the country after paying the inter-state taxes at the state borders. However, we do not permit taking The Bros Car Company vehicles to the Leh/Ladakh region, Kaza/Nako region, and Spiti Valley. We also advise you to avoid bad terrains (especially in non-SUV cars) and areas affected by civil unrest. Please note: Interstate taxes at the state borders are to be paid and borne by the customer. Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred during your trip will be billed to you in your invoice.",
			},
			{
				question: "What kind of cars can I choose from?",
				answer: "We have a curated selection of cars, which includes blockbuster models across segments such as SUVs, ultra-luxury cars, hatchbacks, and sedans. We are constantly increasing our portfolio, so keep a close watch for your favorite car, just in case we don't have it already.",
			},
			{
				question: "Can I take a pet along with me?",
				answer: "While we love pets, some of our customers might be allergic to them, so The Bros Car Company can't allow pets in cars.",
			},
			{
				question: "Is there any speed limit?",
				answer: "110 Kms/Hr is the speed limit. Exceeding it will attract a penalty for over-speeding. In some states (e.g., Karnataka, Maharashtra, Delhi-NCR), some cars might be equipped with speed governors, which will automatically restrict the speed to 80Kms/Hr. This is per government directives.",
			},
		],
		"policies": [
			{
				question: "What is Peak Season? Are the prices different during Peak Season?",
				answer: "Peak season refers to festive periods of very high demand. Our hourly rental tariffs are different for weekdays (Mon-Fri), weekends (Sat-Sun), and the Peak Season. The dates and prices for the Peak Season are dynamically decided based on the demand.",
			},
			{
				question: "Cancellation Policy",
				answer: "Cancellation made between 24 hrs before booking start time - Flat cancellation fee of 100% of the Lease Rental paid in advance. Refund of the remaining portion of Lease Rental after deduction of Platform Fee. Cancellation made after booking start time - No refund of Lease Rental paid in advance. Notwithstanding anything contrary stated herein, The Bros Car Company reserves the right to withhold any refunds due to cancellations if The Bros Car Company, at its sole discretion, perceives any credit card frauds by a user or where cancellations are made by a user with an intention to defraud The Bros Car Company. Reschedule before start. No modification is allowed to the schedule booking between 0-4 hours before booking start time.",
			},
			{
				question: "Extension Policy",
				answer: "In case a Guest wishes to extend the booking period, he/she may do so at any time before or after the booking ends. Extension of booking shall be applicable at normal tariff. Shortening post start is not allowed. However, Guests can drop the vehicle before booking end time. No charges or refunds are applicable.",
			},
			{
				question: "Shortening/Rescheduling within 24hrs of booking start or booking end",
				answer: "Guests will not be able to change booking start time or shorten the booking end time within 4 hours prior to the booking start time. No refunds will be applicable. Nevertheless, guests can anytime extend the booking; extension terms provided above shall be applicable.",
			},
			{
				question: "Late Return Policy",
				answer: "Late return would be charged. The calculation of the tariff rate is standard, i.e., 9 am to 9 am.",
			},
			{
				question: "Fuel Policy",
				answer: "In all such events where the Vehicle is dropped at the designated location with: (i) Lesser fuel compared to the fuel gauge reading at the booking start time. Note: Each and every fuel-related dispute needs to be resolved between the Host and the Guest independently. The Bros Car Company shall not be involved in resolving any fuel-related disputes. The Bros Car Company only shall be limited to providing an alternate Vehicle to the Guest for events where the Guest receives a Vehicle with no fuel.",
			},
			{
				question: "Returning the vehicle to the wrong location",
				answer: "For all the events where the vehicle is not returned to the designated drop location, the Guest shall be liable to pay the amount as contemplated.",
			},
			{
				question: "Traffic and Parking Violations",
				answer: "Full payment of fines to be claimed by the Guest. No Show Bookings would stand canceled if after 4 hours of booking start time the Guest still doesn't show up. No refunds would be applicable.",
			},
			{
				question: "Over speeding >= 80 Kms/Hr",
				answer: "INR 1000 (over and above any government fines that may have been levied); Smoking: A fee charge of INR 500 plus applicable damage costs related to interiors. Its charges may differ from the car type.",
			},
			{
				question: "Wrong Fuelling",
				answer: "The Guest will be liable for the full cost of repair / damage to the vehicle + miscellaneous expenses arising out of the damages.",
			},
			{
				question: "Key not returned at end of reservation",
				answer: "A flat fee charge of INR 2000 if not returned within 3 days. Its charges may differ from the car type.",
			},
			{
				question: "Cleaning required (interiors)",
				answer: "If the Guest returns the car in dirty condition, he/she will be charged the cleaning fee as follows: (i) For dirty removable (foot mats etc.) – 500 INR (ii) For interior washing / dry cleaning (for seat covers, door panels).",
			},
		],
	};

	return (
		<div className="min-h-screen pt-32 pb-20 px-10 bg-zinc-800">
			<FAQ
				title="Frequently Asked Questions"
				subtitle="Find answers to the most common questions about The Bros Car Company."
				categories={categories}
				faqData={faqData}
			/>
		</div>
	);
};

export default FAQDemo; 
