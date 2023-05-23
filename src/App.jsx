import React from "react";
import { useState } from "react";

import Title from "./components/Title";
import DurationControlContainer from "./components/DurationControlContainer";

const DEFAULT_SESSION_LENGTH = 25;
const DEFAULT_BREAK_LENGTH = 5;

function App() {
    const [sessionLength, sessionLengthSetter] = useState(DEFAULT_SESSION_LENGTH);
    const [breakLength, breakLengthSetter] = useState(DEFAULT_BREAK_LENGTH);

	return (
		<React.Fragment>
			<Title text="Let's Start Cooking!" />
			<div className="flex gap-40">
				<DurationControlContainer id="session" state={sessionLength} stateSetter={sessionLengthSetter} />
				<DurationControlContainer id="break" state={breakLength} stateSetter={breakLengthSetter} />
			</div>
		</React.Fragment>
	);
}

export default App;