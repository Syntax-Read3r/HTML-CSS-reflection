import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import CardTwo from "../Card/CardTwo";
import latestNewsOne from "../../Assets/Images/latestNewsOne.webp";
import latestNewsTwo from "../../Assets/Images/latestNewsTwo.webp";
import latestNewsThree from "../../Assets/Images/latestNewsThree.jpg";
import latestNewsFour from "../../Assets/Images/latestNewsFour.webp";

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
				<CardTwo
					title="September Notables 2022"
					imageUrl={latestNewsOne}
					body="Each month, various departments recognise those employees who have excelled in their work and helped..."
					bColor="red"
					postrLogo={latestNewsFour}
					postedBy="Posted by Netmatters"
					datePosted="4th October 2022"
				/>

				<CardTwo
					title="What is the PSTN switch off?"
					imageUrl={latestNewsTwo}
					body="The Public Switched Telephone Network (PSTN) is an aging phone network that is hosted in the UK that allows ca... "
					bColor="red"
					postrLogo={latestNewsFour}
					postedBy="Posted by Netmatters"
					datePosted="30th September 2022"
				/>

				<CardTwo
					title="The Green Team Reducing Our Carbon Footprint..."
					imageUrl={latestNewsThree}
					body="Back in Novermber 2021 we documented our fantastic Ecological Milestone, and we happy to report that..."
					bColor="purple"
					postrLogo={latestNewsFour}
					postedBy="Posted by Netmatters"
					datePosted="28th September 2022"
				/>
			</div>
			{/* End of Cards */}
		</div>
	);
}

export default LatestNews;
