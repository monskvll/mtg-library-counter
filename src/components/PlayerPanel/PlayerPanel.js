import { useState } from "react";

import CounterButton from "../CounterButton/CounterButton";

import "./PlayerPanel.css";

const PlayerPanel = () => {
	const [numberOfCards, setNumberOfCards] = useState(99);

	const handlePlusClick = () => {
		setNumberOfCards((previousValue) => previousValue + 1);
	};

	const handleMinusClick = () => {
		if (numberOfCards <= 0) {
			return;
		}
		setNumberOfCards((previousValue) => previousValue - 1);
	};

	return (
		<div className="playerPanelWrapper">
			<CounterButton
				content="+"
				onClick={handlePlusClick}
			/>
			<p
				className={`numberOfCardsLabel ${
					!numberOfCards ? "numberOfCardsZero" : ""
				}`}
			>
				{numberOfCards}
			</p>
			<CounterButton
				content="-"
				onClick={handleMinusClick}
			/>
		</div>
	);
};

export default PlayerPanel;
