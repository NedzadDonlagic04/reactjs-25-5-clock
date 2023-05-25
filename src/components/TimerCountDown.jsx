import { useEffect, useState } from "react";

import PropTypes from 'prop-types';
import { TIMER_STATE } from "../exports/constants";

let intervalID = null;

function TimerCountDown({ timerState }) {
	const [currentlyCounting/* , currentlyCountingSetter */] = useState('Session');
	//                             ^ commented to prevent warning

	useEffect(() => {
		if(timerState === TIMER_STATE.PLAYING) intervalID = setInterval(() => console.log(1), 1000);
		else {
			clearInterval(intervalID);
			if(timerState === TIMER_STATE.RESET) {
				console.log('Reset');
			}
		}
	}, [timerState]);

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

TimerCountDown.propTypes = {
	timerState: PropTypes.number.isRequired
}

export default TimerCountDown;