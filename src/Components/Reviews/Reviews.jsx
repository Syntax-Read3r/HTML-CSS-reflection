import React from "react";
import Button from "../Button/Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";

function Reviews() {
	return (
		<section className="reviews__section">
			{/* Beginning of column one */}
			<div className="reviews__section--columnOne">
				<h2 className="reviews__section--columnOne--title">
					Welcome To Netmatters
				</h2>
				<p className="review__section--columnOne--paragraph">
					Netmatters is a leading Bespoke Software, IT Support, and Digital
					Marketing company based in the East of England with offices in
					Cambridge, Wymondham, and Great Yarmouth. We aren't tied into
					contracts with third-party providers, so you know that our
					recommendations for your business are based purely with one benefit in
					mind: to help improve your business with the most appropriate
					solutions. We pride ourselves on being an ethical business and have a
					unique business offering and cost model that ensures you get the most
					from our relationship in an upfront manner.
				</p>

				<Button className="reviews__section--columnOne--btn">
					Read More{" "}
					<IoMdArrowRoundForward className="reviews__section--columnOne--btn--icon" />
				</Button>
			</div>
			{/* End of column one */}

			{/* Begining of column two */}
			<div className="reviews__section--columnTwo">
        {/* Title */}
				<h2 className="reviews__section--columnTwo--title">
					What Our Clients Think
				</h2>
        {/* End of Title */}

        {/* Beginning of reviews */}
				<div className="review__section--columnTwo--stars">
					<BsFillStarFill className="review__section--columnTwo--stars--icon" />
					<BsFillStarFill className="review__section--columnTwo--stars--icon" />
					<BsFillStarFill className="review__section--columnTwo--stars--icon" />
					<BsFillStarFill className="review__section--columnTwo--stars--icon" />
					<BsFillStarFill className="review__section--columnTwo--stars--icon" />
				</div>
        

				<p className="review__section--columnTwo--paragraph">
					Great service. Took the reigns and did all the leg work for us.
					Ensured we were happy with our website and made all changes necessary
					as and when asked to do so.
				</p>

				<p className="review__section--columnTwo-author">
					Oliver King - SEA Scaffolding
				</p>

				<div className="review__section--columnTwo--btn--container">
					{" "}
					<Button className="reviews__section--columnTwo--btn--container--btnOne">
						Google Reviews{" "}
						<IoMdArrowRoundForward className="reviews__section--columnTwo--btn--container--btnOne--icon" />
					</Button>
          <Button className="reviews__section--columnTwo--btn--container--btnTwo">
            Trustpilot Reviews{" "}
            <IoMdArrowRoundForward className="reviews__section--columnTwo--btn--container--btnTwo--icon" />
          </Button>
				</div>
			</div>
			{/* End of column two */}
		</section>
	);
}

export default Reviews;
