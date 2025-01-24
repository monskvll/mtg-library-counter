import "./CounterButton.css";

const CounterButton = ({ content, onClick }) => {
	return (
		<button
			className="counterButton"
			onClick={onClick}
		>
			{content}
		</button>
	);
};

export default CounterButton;
