import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

function LatestNews() {
	return (
		<div className="latestNews__container">
			<div className="latestNews__container--header">
				<h2 className="latestNews__container--header--h2">Latest News</h2>
				<div className="latestNews__container--header--h3-container">
					<h3>
						View All
					</h3>
					<IoMdArrowRoundForward className="latestNews__container--header--h3-container--icon" />
				</div>
			</div>
			<div className="latestNews__container--news"></div>
		</div>
	);
}

export default LatestNews;
