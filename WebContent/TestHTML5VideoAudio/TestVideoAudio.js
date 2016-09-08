/**
 * Displays the audio or video file based on the user choice.
 * At a time only 1 format can be played.
 */

function displayUserMedia() {

	var format = document.getElementsByName('mediaOption');
	var audioMedia = document.getElementById('aaa');
	var videoMedia = document.getElementById('bbb');
	//Check the array of format choices provided to user
	for (var i = 0; i < format.length; i++) {
		//If  a particular format is selected by user
		if (format[i].checked) {
			//Retrieve its value
			var selectedFormat = format[i].value;
			//If the format selected is video
			if (selectedFormat == "Video") {
				//If the audio is still playing then pause it
				if (!audioMedia.paused)
					audioMedia.pause();
				//Make the 'display' attribute of the space in which the audio file is displayed as 'none'
				document.getElementById('audio_media_space').style.display = 'none';
				//Display the video file
				document.getElementById('video_media_space').style.display = 'block';
				//Play the video file
				videoMedia.play();
			}
			//If the format selected is audio
			else if (selectedFormat == "Audio") {
				//If the video is still playing then pause it
				if (!videoMedia.paused)
					videoMedia.pause();
				//Make the 'display' attribute of the space in which the video file is displayed as 'none'
				document.getElementById('video_media_space').style.display = 'none';
				//Display the audio file
				document.getElementById('audio_media_space').style.display = 'block';
				//Play the audio file
				audioMedia.play();

			}
		}
	}
}