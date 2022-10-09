import React from "react";
import { FaAsterisk } from "react-icons/fa";
import Button from "../Button/Button";

function ContactUs() {
	return (
		<div className="contactUs__container">
			<form
				method="POST"
				action="#netmatters"
				className="contactUs__container--form"
			>
				<h2 className="contactUs__container--form--title">
					Email Newsletter Sign-Up
				</h2>
				<div className="contactUs__container--form--input-container">
					<div className="contactUs__container--form--input-container--input-field">
						<label
							htmlFor="name"
							className="contactUs__container--form--input-container--input-field--label"
						>
							Your Name{" "}
							<FaAsterisk className="contactUs__container--form--input-container--input-field--label--icon" />
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="contactUs__container--form--input-container--input-field--input"
							required
						/>
					</div>
					<div className="contactUs__container--form--input-container--input-field">
						<label
							htmlFor="email"
							className="contactUs__container--form--input-container--input-field--label"
						>
							Your Email{" "}
							<FaAsterisk className="contactUs__container--form--input-container--input-field--label--icon" />
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="contactUs__container--form--input-container--input-field--input"
							required
						/>
					</div>
				</div>
				<div className="contactUs__container--form--checkbox-container">
					<input
						type="checkbox"
						name="checkbox"
						id="checkbox"
						className="contactUs__container--form--checkbox-container--checkbox"
					/>
					<div className="contactUs__container--form--checkbox-container--label-container">
						<label
							htmlFor="checkbox"
							className="contactUs__container--form--checkbox-container--label-container--label"
						>
							{" "}
							Please tick this box if you wish to receive marketing information
							from us. Please see our{" "}
							<a
								href="#Netmaters"
								className="contactUs__container--form--checkbox-container--label-container--label--link"
							>
								Privacy Policy
							</a>{" "}
							for more information on how we keep your data safe.
						</label>
					</div>
				</div>
				<Button
					text="Subscribe"
					type="submit"
					className="btn--submit--contactUs contactUs__container--form--button"
					buttonStyle={"btn--submit--contactUs"}
				>
					Subscribe
				</Button>
			</form>
		</div>
	);
}

export default ContactUs;
