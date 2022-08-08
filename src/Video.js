import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);
	const handleVideoPress = () => {};
	return (
		<div className="video">
			<video
				onClick={handleVideoPress}
				className="video_player"
				loop
				ref={videoRef}
				src="http://localhost:3000/media/2.mp4"
			></video>
		</div>
	);
}

export default Video;
