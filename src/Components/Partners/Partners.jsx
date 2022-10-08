import React from "react";
import partnersOne from '../../Assets/Images/partnersOne.png';
import partnersOneb from '../../Assets/Images/partnersOneb.jpg';

function Partners() {
	return (
		<div className="partners__container">
			<div className="partners__container--list">
				<div className="partners__container--list--item">

                    {/* Beginning of Description Box */}
					<div className="partners__container--list--item--description-container">
						<div className="partners__container--list--item--description-container--box">
							<h2 className="partners__container--list--item--description-container--box--header">
								Partner 1

							</h2>
							<div className="partners__container--list--item--description-container--box--horizontal-line">
							</div>
							<p className="partners__container--list--item--description-container--box--description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
                    {/* End of Description Box */}

                    {/* Beginning of Image Container */}
                    <div className="partners__container--list--item--image-container">
                        <img src={partnersOneb} alt="partnersOne" className="partners__container--list--item--image-container--imageOne" />
                        <img src={partnersOne} alt='logo' className="partners__container--list--item--image-container--imageTwo"/>

                    </div>
				</div>
			</div>
		</div>
	);
}

export default Partners;
