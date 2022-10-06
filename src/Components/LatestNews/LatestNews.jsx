import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

function LatestNews() {
	return (
		<div className="latestNews__container">
			<div className="latestNews__container--header">
				<h2>Latest News</h2>
				<h3>View All <IoMdArrowRoundForward className="latestNews__container--header--icon"/></h3>
			</div>
			<div className="latestNews__container--news"></div>
		</div>
	);
}

export default LatestNews;
