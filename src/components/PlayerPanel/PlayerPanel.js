import { useState } from "react";

import CounterButton from "../CounterButton/CounterButton";

import "./PlayerPanel.css";

const PlayerPanel = () => {
	const [numberOfCards, setNumberOfCards] = useState(99);

	const libraryOutOfCards = numberOfCards <= 0;

	const handlePlusClick = (amount) => {
		setNumberOfCards((previousValue) => previousValue + amount);
	};

	const handleMinusClick = (amount) => {
		setNumberOfCards((previousValue) => previousValue - amount);
	};

	return (
		<div className="playerPanelWrapper">
			<CounterButton
				content="+5"
				onClick={() => handlePlusClick(5)}
			/>
			<CounterButton
				content="+1"
				onClick={() => handlePlusClick(1)}
			/>
			<p
				className={`numberOfCardsLabel ${
					libraryOutOfCards ? "numberOfCardsZero" : ""
				}`}
			>
				{numberOfCards}
			</p>
			<CounterButton
				content="-1"
				onClick={() => handleMinusClick(1)}
			/>
			<CounterButton
				content="-5"
				onClick={() => handleMinusClick(5)}
			/>
		</div>
	);
};

export default PlayerPanel;
