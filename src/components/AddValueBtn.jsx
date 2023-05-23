import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from 'prop-types';

const MIN = 1;
const MAX = 60;

function AddValueBtn({ id, btnIcon, valueAddedOnClick, stateSetter }) {
	const onClickHandler = () => stateSetter(state => {
		const newState = state + valueAddedOnClick;

		return (newState > MAX)? MAX : (newState < MIN)? MIN : newState;
	});

	return (
		<button id={id} className='cursor-pointer' onClick={onClickHandler}>
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
	}
}

export default AddValueBtn;