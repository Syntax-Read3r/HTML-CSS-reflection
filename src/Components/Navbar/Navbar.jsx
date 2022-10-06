import React from "react";
import "../Styles/sass/main.css";
import logo from "../../Assets/Images/logo2.png";
import Button from "../Button/Button";
import { MdMouse } from "react-icons/md";
import { GiPaperPlane } from "react-icons/gi";
import searchIcon from "../../Assets/Images/searchIcon.png";

export default function Navbar() {
	const checkMenuButton = (e) => {
		e.preventDefault();
		const menuButton = document.querySelector(".navbar__top--menu");
		menuButton.addEventListener("click", checkEvent);
	};

	const checkEvent = (e) => {
		e.preventDefault();
		console.log(e.target);
		const menuButton = document.querySelector(".navbar__top--menu");
		let menuOpen = menuButton.classList.contains("open");
		if (!menuOpen) {
			menuButton.classList.add("open");
			menuOpen = true;
			console.log("menuOpen: ", menuOpen);
		} else {
			menuButton.classList.remove("open");
			menuOpen = false;
			console.log("menuOpen: ", menuOpen, "closed");
		}
	};

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
				<Button
					onClick={() => {
						console.log("Support Clicked");
					}}
					className="btn--primary--nav"
				>
					<MdMouse fontSize="23.008px" color="#fff" />
					SUPPORT
				</Button>

				{/* TS Child THREE */}
				<Button
					onClick={() => {
						console.log("Contact Clicked");
					}}
					className="btn--secondary--nav"
					type={'button'}
					buttonStyle={'btn--secondary--nav'}
				>
					<GiPaperPlane fontSize="23.008px" color="#fff" />
					CONTACT
				</Button>

				{/* TS Child FOUR */}
				<div className="navbar__top--search">
					<form
						method="GET"
						action="#netmatters"
						acceptCharset="UTF-8"
						className="navbar__top--search-form"
					>
						<input
							type="text"
							placeholder="Search..."
							className="navbar__top--search--input"
						/>
						<button
							onClick={() => {
								console.log("Search Clicked");
							}}
							className="btn--search--nav"
							type="submit"
						>
							<img src={searchIcon} fontSize="23.008px" color="#fff" 
							alt='magnifying glass'/>
						</button>
					</form>
				</div>

				{/* TS Child FIVE */}
				<div onClick={checkMenuButton} className="navbar__top--menu">
					<div className="navbar__top--menu--burger"></div>
				</div>
			</div>

			{/* Bottom section of Navbar */}
			<div className="navbar__bottom"></div>
		</div>
	);
}
