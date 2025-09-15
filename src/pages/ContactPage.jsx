import React from "react";

function ContactPage() {
	return (
		<div className="min-h-screen pt-32 pb-20 px-4 sm:px-10 max-w-4xl mx-auto">
			<h1 className="text-5xl sm:text-7xl font-bold text-center mb-12">
				Get In Touch
			</h1>
			<form className="space-y-6">
				<div>
					<label htmlFor="name" className="block mb-2">
						Full Name
					</label>
					<input
						type="text"
						id="name"
						className="w-full p-3  rounded-lg border "
					/>
				</div>
				<div>
					<label htmlFor="email" className="block mb-2">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						className="w-full p-3  rounded-lg border "
					/>
				</div>
				<div>
					<label htmlFor="message" className="block mb-2">
						Message
					</label>
					<textarea
						id="message"
						rows="5"
						className="w-full p-3 rounded-lg border "></textarea>
				</div>
				<button
					type="submit"
					className="bg-blue-600 px-8 py-3 rounded-full font-semibold">
					Send Message
				</button>
			</form>
		</div>
	);
}

export default ContactPage;
