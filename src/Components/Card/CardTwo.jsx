import React from "react";
import Button from "../Button/Button";

function CardTwo({
	title,
	imageUrl,
	body,
	bColor,
	postrLogo,
	postedBy,
	datePosted,
}) {
	return (
		<div className="cardTwo__container">
			<div className="cardTwo__container--image-container">
				<img
					src={imageUrl}
					alt="cardTwo"
					type="image/webp"
					className="cardTwo__container--image-container--image"
				/>
			</div>
			<div className="cardTwo__container--body">
				<div className="cardTwo__container--body--text-container">
					<h3 className="cardTwo__container--body--text-container--h3">{title}</h3>
					<p className="cardTwo__container--body--text-container--p">{body}</p>
				</div>
				<div className="cardTwo__container--body--button-container">
					<Button text="Read More" bColor={bColor} className='btn--latestNews--readMore' type='button' 
						buttonStyle={"btn--latestNews--readMore"}>Read More </Button>
				</div>
				<div className="cardTwo__container--body--horizontal-line-container">
					<hr />
				</div>
				<div className="cardTwo__container--body--signature-container">
					<div className="cardTwo__container--body--signature-container--logo-container">
						<img
							src={postrLogo}
							alt="logo"
							className="cardTwo__container--body--signature-container--logo-container--logo"
						/>
					</div>
					<div className="cardTwo__container--body--signature-container--text-container">
						<h2 className="cardTwo__container--body--signature-container--text-container--h2">
							{postedBy}
						</h2>
						<h3 className="cardTwo__container--body--signature-container--text-container--h3">
							{datePosted}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardTwo;
