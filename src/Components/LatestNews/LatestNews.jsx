import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import CardTwo from "../Card/CardTwo";

function LatestNews() {
	return (
		<div className="latestNews__container">
			{/* Beginning of Header*/}
			<div className="latestNews__container--header">
				<h2 className="latestNews__container--header--h2">Latest News</h2>
				<div className="latestNews__container--header--h3-container">
					<h3>View All</h3>
					<IoMdArrowRoundForward className="latestNews__container--header--h3-container--icon" />
				</div>
			</div>
			{/* End of Header */}

			{/* Beginning of Cards */}
			<div className="latestNews__container--news">
				<CardTwo title="CardOne" 
				imageUrl=''/>
				<CardTwo />
				<CardTwo />
			</div>
			{/* End of Cards */}
		</div>
	);
}

export default LatestNews;
