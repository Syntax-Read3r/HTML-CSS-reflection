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
					className="our-services__container--row--top--card--one c_one"
				>
					<div className="our-services__container--row--top--card--one--icon-container">
						<IoAppsSharp className="our-services__container--row--top--card--one--icon-container--icon" />
					</div>

					<div className="our-services__container--row--top--card--one--text-container">
						<h2 className="our-services__container--row--top--card--one--text-container--title">Bespoke Software</h2>
						<p className="our-services__container--row--top--card--one--text-container--paragraph">
							Tailored software solutions to improve business productivity and
							online profits.
						</p>
                        <br />
					</div>
					<div className="our-services__container--row--top--card--one--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card One */}

				{/* Start of Card Two */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--top--card--two c_two"
				>
					<div className="our-services__container--row--top--card--two--icon-container">
						<ImDisplay className="our-services__container--row--top--card--two--icon-container--icon" />
					</div>

					<div className="our-services__container--row--top--card--two--text-container">
						<h2>IT Support</h2>

						<p>
							Remotely managed IT services that is catered to your business
							needs, adds value &#38; reduces costs.
						</p>
					</div>
					<div className="our-services__container--row--top--card--two--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card Two */}

				{/* Start of Card Three */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--top--card--three c_three"
				>
					<div className="our-services__container--row--top--card--three--icon-container">
						<AiFillSignal className="our-services__container--row--top--card--three--icon-container--icon" />
					</div>

					<div className="our-services__container--row--top--card--three--text-container">
						<h2
						className="our-services__container--row--top--card--three--text-container--title">Digital Marketing</h2>

						<p
						className="our-services__container--row--top--card--three--text-container--paragraph">
							Driven brand awareness &#38; ROI through creative digital
							marketing campaings.
						</p>
                        <br />
					</div>
					<div className="our-services__container--row--top--card--three--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card Three */}
			</div>

			{/*NOTE: Bottom Row of Our Services */}
			<div className="our-services__container--row--bottom">
				{/* Start of Card One */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--bottom--cardOne"
				>
					<div className="our-services__container--row--bottom--card--icon-container">
						<MdPhoneInTalk className="our-services__container--row--bottom--card--icon-container--icon" />
					</div>

					<div className="our-services__container--row--bottom--card--text-container">
						<h2>Telecoms Services</h2>

						<p>
							Stay connected with bespoke telecoms solutions when you need it
							most.
						</p>
					</div>
					<div className="our-services__container--row--bottom--card--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card One */}

				{/* Start of Card Two */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--bottom--card"
				>
					<div className="our-services__container--row--bottom--card--icon-container">
						<GrCode className="our-services__container--row--bottom--card--icon-container--icon" />
					</div>

					<div className="our-services__container--row--bottom--card--text-container">
						<h2>Web Design</h2>

						<p>
							User-centric design for businesses looking to make a lasting
							impression.
						</p>
					</div>
					<div className="our-services__container--row--bottom--card--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card Two */}

				{/* Start of Card Three */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--bottom--card"
				>
					<div className="our-services__container--row--bottom--card--icon-container">
						<MdSecurity className="our-services__container--row--bottom--card--icon-container--icon" />
					</div>

					<div className="our-services__container--row--bottom--card--text-container">
						<h2>Cyber Security</h2>

						<p>
							Ensuring your online business stas secure 27/7 365 days of the
							year.
						</p>
					</div>
					<div className="our-services__container--row--bottom--card--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card Three */}

				{/* Start of Card Four */}
				<a
					href="Bespoke Software"
					className="our-services__container--row--bottom--card"
				>
					<div className="our-services__container--row--bottom--card--icon-container">
						<IoMdSchool className="our-services__container--row--bottom--card--icon-container--icon" />
					</div>

					<div className="our-services__container--row--bottom--card--text-container">
						<h2>Developer Training</h2>

						<p>
							Have you considered a career in software development but you
							aren't sure where to start? We can help.
						</p>
					</div>
					<div className="our-services__container--row--bottom--card--button-container">
						<Button>Read More</Button>
					</div>
				</a>
				{/* End of Card Four */}
			</div>
		</div>
	);
}

export default OurServices;
