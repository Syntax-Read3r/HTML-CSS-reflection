import React from "react";
import Button from "../Button/Button";

const Card = ({ checkIcon, title, text }) => {
	return (
		<a href="Bespoke Software" className="card">
			<div className="card__icon-container">{checkIcon}</div>

			<div className="card__text-container">
				<h2>{title}</h2>
				<p>{text}</p>
				<br />
			</div>
			<div className="card__button-container">
				<Button>Read More</Button>
			</div>
		</a>
	);
};

export default Card;
