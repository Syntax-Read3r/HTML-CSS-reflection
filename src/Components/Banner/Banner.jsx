import React from "react";
import BannerImg from "../../Assets/Images/home-banner.webp";

function Banner() {
	return (
		<div className="banner-container">
			<div className="banner-container__row">
				<div className="banner-container__row--banner">
					<div className="banner-container__row--banner--image">
						<img src={BannerImg} alt="Netmatter banner" />
					</div>
					<div className="banner-container__row--banner--text">
						<div className="banner-container__row--banner--text--h2">
							<h2>The East Of England's Leading Technology Company</h2>
						</div>
						<div className="banner-container__row--banner-text--h2--paragraph">
							<p>
								Performance-driven digital and technology services
								<br />
								with complete transparency.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
