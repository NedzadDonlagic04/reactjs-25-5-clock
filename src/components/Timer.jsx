import TimerCountDown from "./TimerCountDown";
import TimerControls from "./TimerControls";

import PropTypes from 'prop-types';

function Timer({ sessionLength, breakLength, timerState, timerStateSetter }) {
	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<TimerCountDown timerState={timerState} sessionLength={sessionLength} breakLength={breakLength} />
			
			<TimerControls timerState={timerState} timerStateSetter={timerStateSetter} />
		</div>
	);
}

Timer.propTypes = {
	sessionLength: PropTypes.number.isRequired,
	breakLength: PropTypes.number.isRequired,
	timerState: PropTypes.number.isRequired,
	timerStateSetter: (props, propName, componentName) => {
		if(typeof(props[propName]) !== 'function') {
			throw new Error("Invalid type of '" + propName + "' supplied to" + " '" + componentName + "'. Validation failed.");
		} 
	}
};

export default Timer;