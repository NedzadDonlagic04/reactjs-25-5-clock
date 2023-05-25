import React from "react";
import { useState } from "react";

import Title from "./components/Title";
import Timer from "./components/Timer";
import DurationControlContainer from "./components/DurationControlContainer";

import { DEFAULT_VALUES, TIMER_STATE } from "./exports/constants";

function App() {
    const [sessionLength, sessionLengthSetter] = useState(DEFAULT_VALUES.SESSION);
    const [breakLength, breakLengthSetter] = useState(DEFAULT_VALUES.BREAK);
	const [timerState, timerStateSetter] = useState(TIMER_STATE.RESET);

	return (
		<React.Fragment>
			<Title text="Let's Start Cooking!" />
			<Timer sessionLength={sessionLength} breakLength={breakLength} timerState={timerState} timerStateSetter={timerStateSetter} />
			<div className="flex flex-col gap-10 sm:flex-row sm:gap-40">
				<DurationControlContainer id="session" state={sessionLength} stateSetter={sessionLengthSetter} disabled={timerState} />
				<DurationControlContainer id="break" state={breakLength} stateSetter={breakLengthSetter} disabled={timerState} />
			</div>
		</React.Fragment>
	);
}

export default App;