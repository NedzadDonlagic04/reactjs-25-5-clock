import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause ,faRefresh } from "@fortawesome/free-solid-svg-icons";

import PropTypes from 'prop-types';
import { TIMER_STATE } from "../exports/constants";

function TimerControls({ timerState, timerStateSetter }) {
	return (
		<div className="w-full flex justify-evenly">
			<button id="start_stop" 
					className="cursor-pointer scale-150 transition-transform duration-150 ease-in-out hover:scale-200"
					onClick={() => timerStateSetter(state => (state !== TIMER_STATE.PLAYING)? TIMER_STATE.PLAYING : TIMER_STATE.PAUSED)}>
				<FontAwesomeIcon className="text-primary-green" icon={timerState === TIMER_STATE.PLAYING ? faPause : faPlay} />
			</button>

			<button id="reset" 
					className="cursor-pointer scale-150 transition-transform duration-150 ease-in-out hover:scale-200"
					onClick={() => {
						timerStateSetter(TIMER_STATE.RESET);

						document.getElementById('beep').pause();
						document.getElementById('beep').currentTime = 0;
						// ^ Used to reset the audio element
						// Would do it differently but then it wouldn't pass the unit test
						// In this case it works and doesn't seem too scuffed
					}}>
				<FontAwesomeIcon className="text-primary-green" icon={faRefresh} />
			</button>
		</div>
	);
}

TimerControls.propTypes = {
	timerState: PropTypes.number.isRequired,
	timerStateSetter: (props, propName, componentName) => {
		if(typeof(props[propName]) !== 'function') {
			throw new Error("Invalid type of '" + propName + "' supplied to" + " '" + componentName + "'. Validation failed.");
		} 
	}
};

export default TimerControls;