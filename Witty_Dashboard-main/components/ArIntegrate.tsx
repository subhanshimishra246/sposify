import { useRef, useState } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

export default function Home() {
	// const videoRef = useRef(null);
	const [toggle, setToggle] = useState(false);
	const [cameraFacingMode, setCameraFacingMode] = useState(FACING_MODES.USER);

	const handleVideo = (video: any) => {
		// Get the user's camera
		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then(function (stream) {
					video.current.srcObject = stream;
					video.current.play();
				})
				.catch(function (error) {
					console.log("The following error occurred: " + error);
				});
		}
	};

	const handleTakePhoto = (dataUri: any) => {
		// Do something with the photo data
		console.log("takePhoto", dataUri);
	};

	return (
		<div className="items-center">
			{/* <video ref={videoRef} width="640" height="480" autoPlay ></video> */}
			{toggle ? (
				<Camera
					onTakePhoto={(dataUri: any) => handleTakePhoto(dataUri)}
					isImageMirror={false}
					idealFacingMode={cameraFacingMode}
				/>
			) : (
				<div className=""></div>
			)}
			<button
				onClick={() =>
					setCameraFacingMode(
						cameraFacingMode === FACING_MODES.USER
							? FACING_MODES.ENVIRONMENT
							: FACING_MODES.USER
					)
				}
				onClickCapture={() => setToggle(!toggle)}
			>
				Toggle Camera
			</button>
		</div>
	);
}
