import React from "react";
import Button from "../Button/Button";
import { IoAppsSharp } from "react-icons/io5";
import { ImDisplay } from "react-icons/im";
import { AiFillSignal } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { GrCode } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";

function OurServices() {
	return (
		<div className="our-services__container">
			<div className="our-services__container--header">
				<h2>Our Services</h2>
			</div>

			{/* Top Row of Our Services */}
			<div className="our-services__container--row--top">
				{/* Start of Card One */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--top--card"
				>
					<div className="our-services__container--row-top--card--icon-container">
						<IoAppsSharp className="our-services__container--row--top--card--icon-container--icon" />
					</div>

					<div className="our-services__container--row--top--card--text-container">
						<h2>Bespoke Software</h2>

						<p>
							Tailored software solutions to improve business productivity and
							online profits.
						</p>
					</div>
					<div className="our-services__container--row--top--card--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card One */}

				{/* Start of Card Two */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--top--card"
				>
					<div className="our-services__container--row-top--card--icon-container">
						<ImDisplay className="our-services__container--row--top--card--icon-container--icon" />
					</div>

					<div className="our-services__container--row--top--card--text-container">
						<h2>IT Support</h2>

						<p>
							Remotely managed IT services that is catered to your business
							needs, adds value &#38; reduces costs.
						</p>
					</div>
					<div className="our-services__container--row--top--card--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card Two */}

				{/* Start of Card Three */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--top--card"
				>
					<div className="our-services__container--row-top--card--icon-container">
						<AiFillSignal
                            className="our-services__container--row--top--card--icon-container--icon" />
					</div>

					<div className="our-services__container--row--top--card--text-container">
						<h2>Digital Marketing</h2>

						<p>
							Driven brand awareness &#38; ROI through creative digital
							marketing campaings.
						</p>
					</div>
					<div className="our-services__container--row--top--card--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card Three */}
			</div>

			{/* Bottom Row of Our Services */}
			<div className="our-services__container--row--bottom">
				<div className="our-services__container--row-bottom--card"></div>
				<div className="our-services__container--row-bottom--card"></div>
				<div className="our-services__container--row-bottom--card"></div>
				<div className="our-services__container--row-bottom--card"></div>
			</div>
		</div>
	);
}

export default OurServices;
