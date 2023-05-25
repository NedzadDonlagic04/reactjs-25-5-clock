// Converts given seconds to a MM:SS time formatted string
const convertSecondsToMMSS = secs => {
	let minutes = String(Math.floor(secs / 60));
	let seconds = String(secs % 60);

	if(minutes.length === 1) minutes = '0' + minutes;
	if(seconds.length === 1) seconds = '0' + seconds;

	return `${minutes}:${seconds}`;
}

export { convertSecondsToMMSS };