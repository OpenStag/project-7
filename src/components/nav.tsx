import React from "react";

const Nav: React.FC = () => {
	return (
		<nav className="bg-blue-700 px-2 py-2 shadow flex items-center justify-center">
			<ul className="flex space-x-9">
				<li><a href="/" className="hover:underline">Home</a></li>
				<li><a href="/" className="hover:underline">About</a></li>
				<li><a href="/" className="hover:underline">Book</a></li>
				<li><a href="/browse" className="hover:underline">Category</a></li>
				<li><a href="/contact" className="hover:underline">Contact</a></li>
			</ul>
		</nav>
	);
};

export default Nav;
