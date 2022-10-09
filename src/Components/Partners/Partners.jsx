import React from "react";
import partnersOne from "../../Assets/Images/partnersOne.png";
import partnersOneb from "../../Assets/Images/partnersOneb.jpg";
import partnersTwo from "../../Assets/Images/partnersTwo.png";
import partnersTwob from "../../Assets/Images/partnersTwob.png";
import partnersThree from "../../Assets/Images/partnersThree.png";
import partnersThreeb from "../../Assets/Images/partnersThreeb.jpg";
import partnersFour from "../../Assets/Images/partnersFour.png";
import partnersFourb from "../../Assets/Images/partnersFourb.jpg";

function Partners() {
	return (
		<div className="partners__container">
			<div className="partners__container--list">
				{/* Beginning of List Item One */}
				<div className="partners__container--list--item">
					{/* Beginning of Description Box */}
					<div className="partners__container--list--item--description-container">
						<div className="partners__container--list--item--description-container--box">
							<h2 className="partners__container--list--item--description-container--box--header">
								Partner 1
							</h2>
							<div className="partners__container--list--item--description-container--box--horizontal-line"></div>
							<p className="partners__container--list--item--description-container--box--description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<div className="partners__container--list--item--description-container--box--triangle"></div>
						</div>
					</div>
					{/* End of Description Box */}

					{/* Beginning of Image Container */}
					<div className="partners__container--list--item--image-container">
						<img
							src={partnersOneb}
							alt="partnersOne"
							className="partners__container--list--item--image-container--imageOne"
						/>
						<img
							src={partnersOne}
							alt="logo"
							className="partners__container--list--item--image-container--imageTwo"
						/>
					</div>
					{/* End of Image Container */}
				</div>
				{/* End of List Item One */}

				{/* Beginning of List Item Two */}
				<div className="partners__container--list--item">
					{/* Beginning of Description Box */}
					<div className="partners__container--list--item--description-container">
						<div className="partners__container--list--item--description-container--box">
							<h2 className="partners__container--list--item--description-container--box--header">
								Partner Two
							</h2>
							<div className="partners__container--list--item--description-container--box--horizontal-line"></div>
							<p className="partners__container--list--item--description-container--box--description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis quia qui, nesciunt consectetur
							</p>
							<div className="partners__container--list--item--description-container--box--triangle"></div>
						</div>
					</div>
					{/* End of Description Box */}

					{/* Beginning of Image Container */}
					<div className="partners__container--list--item--image-container">
						<img
							src={partnersTwob}
							alt="partnersOne"
							className="partners__container--list--item--image-container--imageOne"
						/>
						<img
							src={partnersTwo}
							alt="logo"
							className="partners__container--list--item--image-container--imageTwo"
						/>
					</div>
					{/* End of Image Container */}
				</div>
				{/* End of List Item Two */}

				{/* Start of List Item Three */}
				<div className="partners__container--list--item">
					{/* Beginning of Description Box */}
					<div className="partners__container--list--item--description-container">
						<div className="partners__container--list--item--description-container--box">
							<h2 className="partners__container--list--item--description-container--box--header">
								Partner 3
							</h2>
							<div className="partners__container--list--item--description-container--box--horizontal-line"></div>
							<p className="partners__container--list--item--description-container--box--description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<div className="partners__container--list--item--description-container--box--triangle"></div>
						</div>
					</div>
					{/* End of Description Box */}

					{/* Beginning of Image Container */}
					<div className="partners__container--list--item--image-container">
						<img
							src={partnersThreeb}
							alt="partnersOne"
							className="partners__container--list--item--image-container--imageOne"
						/>
						<img
							src={partnersThree}
							alt="logo"
							className="partners__container--list--item--image-container--imageTwo"
						/>
					</div>
					{/* End of Image Container */}
				</div>
				{/* End of List Item Three */}

				{/* Start of List Item Four */}
				<div className="partners__container--list--item">
					{/* Beginning of Description Box */}
					<div className="partners__container--list--item--description-container">
						<div className="partners__container--list--item--description-container--box">
							<h2 className="partners__container--list--item--description-container--box--header">
								Partner 4
							</h2>
							<div className="partners__container--list--item--description-container--box--horizontal-line"></div>
							<p className="partners__container--list--item--description-container--box--description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<div className="partners__container--list--item--description-container--box--triangle"></div>
						</div>
					</div>
					{/* End of Description Box */}

					{/* Beginning of Image Container */}
					<div className="partners__container--list--item--image-container">
						<img
							src={partnersFourb}
							alt="partnersOne"
							className="partners__container--list--item--image-container--imageOne"
						/>
						<img
							src={partnersFour}
							alt="logo"
							className="partners__container--list--item--image-container--imageTwo"
						/>
					</div>
					{/* End of Image Container */}
				</div>
                {/* End of List Item Four */}
			</div>
		</div>
	);
}

export default Partners;
