import React from "react";
import "../../Styles/sass/main.css";
import logo from "../../Assets/Images/logo.png";

function Navbar() {
	return (
		<div className="navbar">

			{/* Top section of Navbar */}
			<div className="navbar__top">
				<div className="navbar__top--logo-container">
					<a href="#netmatters" className="navbar__top--logo-container--logo">
						<img src="logo" alt="" />
					</a>
				</div>
			</div>

			{/* Bottom section of Navbar */}
			<div className="navbar__bottom">

			</div>
		</div>
	);
}

export default Navbar;
