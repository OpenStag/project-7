import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-blue-900 text-white py-6 text-center border-t border-white">
			<h2 className="font-bold text-2xl mb-4">Book Haven</h2>
			<div className="mb-2 flex justify-center space-x-8">
				<a href="/" className="hover:underline">Home</a>
				<a href="/about" className="hover:underline">About</a>
				<a href="/contactus" className="hover:underline">Contact Us</a>
			</div>
			<div className="flex justify-center space-x-8 mb-4">
				<span role="img" aria-label="book">📘</span>
				<span role="img" aria-label="camera">📷</span>
				<span role="img" aria-label="chat">💬</span>
			</div>
			<div className="mt-2">
				© 2025 Book Haven. All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
