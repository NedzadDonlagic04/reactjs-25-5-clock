import React from "react";
import { useState } from "react";

import Title from "./components/Title";
import DurationControlContainer from "./components/DurationControlContainer";

import { DEFAULT_VALUES } from "./exports/constants";

function App() {
    const [sessionLength, sessionLengthSetter] = useState(DEFAULT_VALUES.SESSION);
    const [breakLength, breakLengthSetter] = useState(DEFAULT_VALUES.BREAK);

	return (
		<React.Fragment>
			<Title text="Let's Start Cooking!" />
			<div className="flex flex-col gap-10 sm:flex-row sm:gap-40">
				<DurationControlContainer id="session" state={sessionLength} stateSetter={sessionLengthSetter} />
				<DurationControlContainer id="break" state={breakLength} stateSetter={breakLengthSetter} />
			</div>
		</React.Fragment>
	);
}

export default App;