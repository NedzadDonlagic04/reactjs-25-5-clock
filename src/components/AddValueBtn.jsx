import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from 'prop-types';

import { DURATION_RANGE, TIMER_STATE } from './../exports/constants';

const { MIN, MAX } = DURATION_RANGE;

function AddValueBtn({ id, btnIcon, valueAddedOnClick, stateSetter, disabled }) {
	const onClickHandler = () => stateSetter(state => {
		const newState = state + valueAddedOnClick;

		return (newState > MAX)? MAX : (newState < MIN)? MIN : newState;
	});

	return (
		<button id={id} 
				className={'cursor-pointer scale-100 transition-transform duration-150 ease-in-out ' + (disabled === TIMER_STATE.RESET ? '' : 'hover:scale-150')}
				onClick={onClickHandler}
				disabled={disabled}>
			<FontAwesomeIcon className="text-primary-green" icon={btnIcon} />
		</button>
	);
}

AddValueBtn.propTypes = {
	id: PropTypes.string.isRequired,
	btnIcon: PropTypes.object.isRequired,
	valueAddedOnClick: PropTypes.number.isRequired,
	stateSetter: (props, propName, componentName) => {
		if(typeof(props[propName]) !== 'function') {
			throw new Error("Invalid type of '" + propName + "' supplied to" + " '" + componentName + "'. Validation failed.");
		} 
	},
	disabled: PropTypes.number.isRequired
}

export default AddValueBtn;