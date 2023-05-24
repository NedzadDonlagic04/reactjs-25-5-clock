import TimerCountDown from "./TimerCountDown";
import TimerControls from "./TimerControls";

import PropTypes from 'prop-types';

function Timer(/* { sessionLength, breakLength, timerPlaying, timerPlayingSetter } */) {
	//								^ commented to prevent warning
	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<TimerCountDown />
			
			<TimerControls />
		</div>
	);
}

Timer.propTypes = {
	sessionLength: PropTypes.number.isRequired,
	breakLength: PropTypes.number.isRequired,
	timerPlaying: PropTypes.bool.isRequired,
	timerPlayingSetter: (props, propName, componentName) => {
		if(typeof(props[propName]) !== 'function') {
			throw new Error("Invalid type of '" + propName + "' supplied to" + " '" + componentName + "'. Validation failed.");
		} 
	}
}

export default Timer;