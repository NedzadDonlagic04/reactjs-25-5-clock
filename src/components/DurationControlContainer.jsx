import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import PropTypes from 'prop-types';

import AddValueBtn from "./AddValueBtn";

function DurationControlContainer({ id, state, stateSetter }) {
	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<h2 id={`${id}-label`} className="capitalize text-2xl">
				{`${id} length`}
			</h2>

			<div className="flex justify-center items-center gap-5">
				<AddValueBtn id={`${id}-decrement`} btnIcon={faArrowDown} valueAddedOnClick={-1} stateSetter={stateSetter} />
				
				<p id={`${id}-length`} className="text-lg">
					{state}
				</p>
				
				<AddValueBtn id={`${id}-increment`} btnIcon={faArrowUp} valueAddedOnClick={1} stateSetter={stateSetter} />
			</div>
		</div>
	);
}

DurationControlContainer.propTypes = {
	id: PropTypes.string.isRequired,
	state: PropTypes.number.isRequired,
	stateSetter: (props, propName, componentName) => {
		if(typeof(props[propName]) !== 'function') {
			throw new Error("Invalid type of '" + propName + "' supplied to" + " '" + componentName + "'. Validation failed.");
		} 
	}
}

export default DurationControlContainer;