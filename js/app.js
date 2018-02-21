
const video = document.querySelector('.mejs__player');
const textSpan = document.querySelectorAll('.captionWrapper span');


video.addEventListener('timeupdate', () => {
  for (let i = 0; i < textSpan.length; i += 1) {
    let startTime = textSpan[i].getAttribute('data-start');
    let endTime = textSpan[i].getAttribute('data-end');
    let currentTime = video.currentTime;
    if ( currentTime >= startTime && currentTime <= endTime) {
      textSpan[i].className = "active";
    } else {
      textSpan[i].className = "inactive";
    }
  }
});

function textClick (span) {
  span.addEventListener("click", () => {
     let newTime = span.getAttribute('data-start');
     if (span) {
      video.currentTime = newTime;
      video.play();
     }
 });
}

for (let i = 0; i < textSpan.length; i += 1) {
  let span = textSpan[i];
  textClick (span);
}
