import { useState } from "react";

import "./App.css";
import Input from "./components/Input/Input";
import PlayerPanel from "./components/PlayerPanel/PlayerPanel";

function MtgLibraryCounter() {
	const [numberOfPlayers, setNumberOfPlayers] = useState([]);
	const [showInput, setShowInput] = useState(true);

	const handleInputSubmit = (players) => {
		const playersToBeCreated = Array.from(
			{ length: players },
			(_, i) => i + 1
		);
		setNumberOfPlayers(playersToBeCreated);
		setShowInput(false);
	};

	return (
		<div className="App">
			{showInput && <Input onSubmit={handleInputSubmit} />}
			<div className="playerPanelsWrapper">
				{numberOfPlayers.map((player) => (
					<PlayerPanel key={player} />
				))}
			</div>
		</div>
	);
}

export default MtgLibraryCounter;
