import { useState } from "react";

function TimerCountDown() {
	const [currentlyCounting/* , currentlyCountingSetter */] = useState('Session');
	//                             ^ commented to prevent warning

	return (
		<div className="flex flex-col justify-center items-center gap-3 px-14 py-5 border-4 rounded-3xl border-primary-green">
			<h2 className="text-primary-green text-4xl" id="timer-label">
				{currentlyCounting}
			</h2>

			<p className="text-primary-green text-3xl">
				<time id="time-left">25:00</time>
			</p>
		</div>	
	);
}

export default TimerCountDown;