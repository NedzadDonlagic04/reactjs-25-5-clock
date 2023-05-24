import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRefresh } from "@fortawesome/free-solid-svg-icons";

function TimerControls() {
	return (
		<div className="w-full flex justify-evenly">
			<button className="cursor-pointer scale-150 transition-transform duration-150 ease-in-out hover:scale-200">
				<FontAwesomeIcon className="text-primary-green" icon={faPlay} />
			</button>
			<button className="cursor-pointer scale-150 transition-transform duration-150 ease-in-out hover:scale-200">
				<FontAwesomeIcon className="text-primary-green" icon={faRefresh} />
			</button>
		</div>
	);
}

export default TimerControls;