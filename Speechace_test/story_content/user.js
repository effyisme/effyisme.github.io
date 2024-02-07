//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record

// var recordButton = document.getElementById("recordButton");
// var stopButton = document.getElementById("stopButton");
// var pauseButton = document.getElementById("pauseButton");

//add events to those 2 buttons
// recordButton.addEventListener("click", startRecording);
// stopButton.addEventListener("click", stopRecording);
// pauseButton.addEventListener("click", pauseRecording);

function startRecording() {
  console.log("recordButton clicked");

  /*
    Simple constraints object, for more advanced audio features see
    https://addpipe.com/blog/audio-constraints-getusermedia/
  */

  var constraints = { audio: true, video: false }

  /*
    Disable the record button until we get a success or fail from getUserMedia() 
  */

  // recordButton.disabled = true;
  // stopButton.disabled = false;
  // pauseButton.disabled = false

  /*
    We're using the standard promise based getUserMedia() 
    https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  */

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

    /*
      create an audio context after getUserMedia is called
      sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
      the sampleRate defaults to the one set in your OS for your playback device

    */
    audioContext = new AudioContext();

    //update the format 
    // document.getElementById("formats").innerHTML = "Format: 1 channel pcm @ " + audioContext.sampleRate / 1000 + "kHz"

    /*  assign to gumStream for later use  */
    gumStream = stream;

    /* use the stream */
    input = audioContext.createMediaStreamSource(stream);

    /* 
      Create the Recorder object and configure to record mono sound (1 channel)
      Recording 2 channels  will double the file size
    */
    rec = new Recorder(input, { numChannels: 1 })

    //start the recording process
    rec.record()

    console.log("Recording started");

  }).catch(function (err) {
    alert("cannot record audio!");
    console.log(err)
    //enable the record button if getUserMedia() fails
    // recordButton.disabled = false;
    // stopButton.disabled = true;
    // pauseButton.disabled = true
  });
}

function stopRecording() {
  console.log("stopButton clicked");

  //disable the stop button, enable the record too allow for new recordings
  // stopButton.disabled = true;
  // recordButton.disabled = false;
  // pauseButton.disabled = true;

  //reset button just in case the recording is stopped while paused
  // pauseButton.innerHTML = "Pause";

  //tell the recorder to stop the recording
  rec.stop();

  //stop microphone access
  gumStream.getAudioTracks()[0].stop();

  //create the wav blob and pass it on to createDownloadLink
  rec.exportWAV(createDownloadLink);

}

function createDownloadLink(blob) {

  var url = URL.createObjectURL(blob);

  //name of .wav file to use during upload and download (without extendion)
  var filename = new Date().toISOString() + ".wav";

  var formdata = new FormData();
  formdata.append("text", "cow");
  // formdata.append("user_audio_file", data, "audio.wav");
  formdata.append("user_audio_file", blob, filename);
  formdata.append("question_info", "'u1/q1'");
  formdata.append("no_mc", "1");

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://api2.speechace.com/api/scoring/text/v9/json?key=CGUUSsrcz%2Bv%2BHwmFY6Vi9%2BCxENZ0tMbSRcgjyyUFd7EyOuptab7Td1JYcltG6S40Az25fKvMz8cCYwpf%2BF3qoFsvT6SMWV04l97GZlMOi%2FRlnoQoI4XXcaDnyfvWxSMq&dialect=en-us&user_id=XYZ-ABC-99001", requestOptions)
    .then(response => response.text())
    .then(result => {
      // $('#result').text(result)
      var json_result = JSON.parse(result);
      var score = json_result.text_score.speechace_score.pronunciation;
      var text_result = "Score: " + score.toString();
      // $('#record-result').text(text_result);
      // console.log(text_result);
      var player = GetPlayer();
      player.SetVar("scoreAI", score);
    })
    .catch(error => console.log('error', error));
}

function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64gI9UaoDvo":
        Script1();
        break;
      case "6pA9t60RTuY":
        Script2();
        break;
      case "6rSYemHlMIc":
        Script3();
        break;
      case "60IWT2UM9vk":
        Script4();
        break;
  }
}

function Script1()
{
  console.log("start modify");
}

function Script2()
{
  console.log("Recording starts");
  startRecording();
}

function Script3()
{
  console.log("Recording stop");
  stopRecording();
}

function Script4()
{
  console.log("click button record");
}

