//VOICE SPEECH
const btn = document.querySelector(".mic");

btn.addEventListener("click", () => {
  const content = document.querySelector(".searchBox");

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();   // Callback Function for the onStart Event
  recognition.onstart = () => {
    console.log("voice activated");
  };

  recognition.onresult = (event) => {
    let searchBox = document.querySelector(".searchBox");
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);

    $(".searchBox").val(transcript);
  };
  recognition.start();
});
