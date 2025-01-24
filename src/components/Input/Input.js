import { useState } from "react";

import "./Input.css";

const Input = ({ onSubmit }) => {
	const [numberOfPlayers, setNumberOfPlayers] = useState(1);

	const handleChange = (e) => {
		setNumberOfPlayers(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(numberOfPlayers);
	};

	return (
		<form
			className="inputForm"
			onSubmit={handleSubmit}
		>
			<label htmlFor="playersInput">
				Enter the number of players (1-10):
			</label>
			<input
				id="playersInput"
				className="inputField"
				type="number"
				min={1}
				max={10}
				onChange={handleChange}
				value={numberOfPlayers}
			/>
			<button type="submit">Let's go!</button>
		</form>
	);
};

export default Input;
