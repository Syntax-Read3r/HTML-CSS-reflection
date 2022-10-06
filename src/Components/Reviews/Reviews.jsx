import React from "react";
import Button from "../Button/Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";

function Reviews() {
	return (
		<section className="reviews__section">
			<div className="reviews__section--container">
				{/* Beginning of column one */}
				<div className="reviews__section--container--columnOne">
					<h2 className="reviews__section--container--columnOne--title">
						Welcome To Netmatters
					</h2>
					<p className="reviews__section--container--columnOne--paragraph">
						Netmatters is a leading Bespoke Software, IT Support, and Digital
						Marketing company based in the East of England with offices in
						Cambridge, Wymondham, and Great Yarmouth.
					</p>

					<p className="reviews__section--container--columnOne--paragraph">
						We aren't tied into contracts with third-party providers, so you
						know that our recommendations for your business are based purely
						with one benefit in mind: to help improve your business with the
						most appropriate solutions.
					</p>

					<p className="reviews__section--container--columnOne--paragraph">
						We pride ourselves on being an ethical business and have a unique
						business offering and cost model that ensures you get the most from
						our relationship in an upfront manner.
					</p>

					{/* <p className="reviews__section--container--columnOne--paragraph"></p> */}

					<Button
						className="btn--reviews--readMore"
						type={"button"}
						buttonStyle={"btn--reviews--readMore"}
					>
						Read More{" "}
						<IoMdArrowRoundForward className="reviews__section--container--columnOne--btn--icon" />
					</Button>
				</div>
				{/* End of column one */}

				{/* Begining of column two */}
				<div className="reviews__section--container--columnTwo">
					{/* Title */}
					<h2 className="reviews__section--container--columnTwo--title">
						What Our Clients Think
					</h2>
					{/* End of Title */}

					{/* Beginning of reviews */}
					<div className="reviews__section--container--columnTwo--stars">
						<BsFillStarFill className="reviews__section--container--columnTwo--stars--icon" />
						<BsFillStarFill className="reviews__section--container--columnTwo--stars--icon" />
						<BsFillStarFill className="reviews__section--container--columnTwo--stars--icon" />
						<BsFillStarFill className="reviews__section--container--columnTwo--stars--icon" />
						<BsFillStarFill className="reviews__section--container--columnTwo--stars--icon" />
					</div>

					<p className="reviews__section--container--columnTwo--paragraph">
						Great service. Took the reigns and did all the leg work for us.
						Ensured we were happy with our website and made all changes
						necessary as and when asked to do so.
					</p>

					<p className="reviews__section--container--columnTwo--author">
						Oliver King - SEA Scaffolding
					</p>

					<div className="reviews__section--container--columnTwo--btn-container">
						{" "}
						<Button className="btn--google--reviews"type={"button"}
						buttonStyle={"btn--google--reviews"}>
							Google Reviews{" "}
							<IoMdArrowRoundForward className="reviews__section--container--columnTwo--btn--container--btnOne--icon" />
						</Button>
						<Button className="btn--rustpilot--reviews"type={"button"}
						buttonStyle={"btn--trustpilot--reviews"}>
							Trustpilot Reviews<IoMdArrowRoundForward className="reviews__section--container--columnTwo--btn--container--btnTwo--icon" />
						</Button>
					</div>
				</div>
				{/* End of column two */}
			</div>
		</section>
	);
}

export default Reviews;
