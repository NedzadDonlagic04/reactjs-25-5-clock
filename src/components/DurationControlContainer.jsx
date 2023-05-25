import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import PropTypes from 'prop-types';

import AddValueBtn from "./AddValueBtn";

function DurationControlContainer({ id, state, stateSetter, disabled }) {
	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<h3 id={`${id}-label`} className="capitalize text-2xl text-center text-primary-green">
				{`${id} length`}
			</h3>

			<div className="flex justify-center items-center gap-5">
				<AddValueBtn id={`${id}-decrement`} btnIcon={faArrowDown} valueAddedOnClick={-1} stateSetter={stateSetter} disabled={disabled} />
				
				<p id={`${id}-length`} className="text-lg text-primary-green">
					{state}
				</p>
				
				<AddValueBtn id={`${id}-increment`} btnIcon={faArrowUp} valueAddedOnClick={1} stateSetter={stateSetter} disabled={disabled} />
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
	},
	disabled: PropTypes.number.isRequired
}

export default DurationControlContainer;