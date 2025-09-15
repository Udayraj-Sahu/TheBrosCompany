import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Button() {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className="flex items-center gap-2 px-5 py-2 bg-yinmn_blue text-platinum rounded-full text-sm font-medium hover:bg-silver_lake_blue transition-colors">
			<span>Get Started</span>
			<ArrowRight size={16} />
		</motion.button>
	);
}

export default Button;
