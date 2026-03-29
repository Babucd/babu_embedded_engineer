import './style.css'

// Select the video element
const video = document.getElementById('scroll-video') as HTMLVideoElement;

if (video) {
  let hasStarted = false;

  const startVideoSequence = () => {
    if (!hasStarted) {
      hasStarted = true;
      video.play().catch(e => console.error("Error playing video:", e));
    }
  };

  // Start the video naturally once the user scrolls down a little
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      startVideoSequence();
    }
  });

  // When the first video finishes playing naturally, swap to the second video and loop
  video.addEventListener('ended', () => {
    video.src = '/video2.mp4';
    video.loop = true;
    video.play().catch(e => console.error("Error playing second video:", e));
  });

  // If the user refreshes halfway down the page, it should start
  if (window.scrollY > 10) {
    startVideoSequence();
  }

} else {
  console.error("Video element with ID 'scroll-video' not found.");
}
