import PropTypes from 'prop-types';

function Title({ text }) {
	return (
		<header>
			<h1 className='text-5xl text-center text-primary-green'>{text}</h1>
		</header>
	);
}

Title.propTypes = {
	text: PropTypes.string.isRequired
}

export default Title;