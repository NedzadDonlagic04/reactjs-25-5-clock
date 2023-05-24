import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRefresh } from "@fortawesome/free-solid-svg-icons";

function Timer() {
	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<div className="flex flex-col justify-center items-center gap-3 px-14 py-5 border-4 rounded-3xl border-primary-green">
				<h2 className="text-primary-green text-4xl" id="timer-label">Session</h2>

				<p className="text-primary-green text-3xl">
					<time id="time-left">25:00</time>
				</p>
			</div>	
			
			<div className="w-full flex justify-evenly">
				<button className="cursor-pointer scale-150 transition-transform duration-150 ease-in-out hover:scale-200">
					<FontAwesomeIcon className="text-primary-green" icon={faPlay} />
				</button>
				<button className="cursor-pointer scale-150 transition-transform duration-150 ease-in-out hover:scale-200">
					<FontAwesomeIcon className="text-primary-green" icon={faRefresh} />
				</button>
			</div>
		</div>
	);
}

export default Timer;