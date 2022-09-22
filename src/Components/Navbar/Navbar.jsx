import React from "react";
import "../Styles/sass/main.css";
import logo from "../../Assets/Images/logo2.png";
import Button from "../Button/Button";
import {MdMouse} from "react-icons/md"
import {GiPaperPlane} from "react-icons/gi"

export default function Navbar() {
	return (
		<div className="navbar">
			{/* Top section of Navbar */}
			<div className="navbar__top">
				{/* TS Child ONE */}
				<div className="navbar__top--logo-container">
					<a href="#netmatters" className="navbar__top--logo-container--logo">
						<img src={logo} alt="netmatters" className="logo" />
					</a>
				</div>

					{/* TS Child TWO */}
					<Button className="btn--primary--solid">
						<MdMouse fontSize="23.008px" color="#fff" />
						SUPPORT
						</Button>

					{/* TS Child THREE */}
					<Button className="navbar__top--button-two">
						<GiPaperPlane fontSize="23.008px" color="#fff" />
						CONTACT
						</Button>

					{/* TS Child FOUR */}
					<div className="navbar__top--search">
						<input type="text" placeholder="Search..." className="navbar__top--search--input" />
					</div>

					{/* TS Child FIVE */}
					<div className="navbar__top--menu"></div>

			</div>

			{/* Bottom section of Navbar */}
			<div className="navbar__bottom"></div>
		</div>
	);
}
