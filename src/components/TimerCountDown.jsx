import { useEffect, useReducer, useRef } from "react";

import PropTypes from 'prop-types';
import { DEFAULT_VALUES, TIMER_STATE } from "./../exports/constants";
import { convertSecondsToMMSS } from "./../exports/functions";

let intervalID = null;

function TimerCountDown({ sessionLength, breakLength, timerState }) {
	const beepAudio = useRef(null); 

	const [display, displaySetter] = useReducer((prev, state) => {
		if(state === TIMER_STATE.RESET) {
			prev.text = 'Session';
			prev.time = sessionLength * 60;
		} else {
			prev.time--;

			if(prev.time === 0) beepAudio.current.play();
			else if(prev.time < 0) {
				prev.time = (prev.text === 'Session')? breakLength * 60 : sessionLength * 60;
				prev.text = (prev.text === 'Session')? 'Break' : 'Session';
			}
		}

		prev.formattedTime = convertSecondsToMMSS(prev.time);

		return { ...prev };
	}, { text: 'Session', time: sessionLength * 60, formattedTime: convertSecondsToMMSS(sessionLength * 60) });

	useEffect(() => {
		if(timerState === TIMER_STATE.PLAYING) intervalID = setInterval(() => displaySetter(TIMER_STATE.PLAYING), DEFAULT_VALUES.TIMER_DURATION);
		else {
			clearInterval(intervalID);
			if(timerState === TIMER_STATE.WAITING) displaySetter(TIMER_STATE.RESET);
		}
	}, [sessionLength, breakLength, timerState]);

	return (
		<div className="flex flex-col justify-center items-center gap-3 px-14 py-5 border-4 rounded-3xl border-primary-green">
			<h2 className="text-primary-green text-4xl" id="timer-label">
				{display.text}
			</h2>

			<p className="text-primary-green text-3xl">
				<time id="time-left">{display.formattedTime}</time>
			</p>

			<audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={beepAudio}></audio>
		</div>	
	);
}

TimerCountDown.propTypes = {
	sessionLength: PropTypes.number.isRequired,
	breakLength: PropTypes.number.isRequired,
	timerState: PropTypes.number.isRequired
};

export default TimerCountDown;