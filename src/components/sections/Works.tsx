import { useEffect, useRef } from "react";
import "./Works.css";

const Works = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasStarted = false;

    const startVideoSequence = () => {
      if (!hasStarted) {
        hasStarted = true;
        video.play().catch((e) => console.error("Error playing video:", e));
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        startVideoSequence();
      }
    };

    const handleVideoEnded = () => {
      video.src = "/video2.mp4";
      video.loop = true;
      video.play().catch((e) => console.error("Error playing second video:", e));
    };

    window.addEventListener("scroll", handleScroll);
    video.addEventListener("ended", handleVideoEnded);

    if (window.scrollY > 10) {
      startVideoSequence();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (video) video.removeEventListener("ended", handleVideoEnded);
    };
  }, []);

  return (
    <div className="works-container" id="work">
      <div id="split-layout">
        <div id="left-screen">
          <video id="scroll-video" ref={videoRef} muted playsInline autoPlay={false} preload="auto">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div id="right-screen">
          <div className="content-wrapper">
            <h1 className="title">The Future of 3D</h1>
            <p className="description">
              Scroll down to watch the animation unfold. Experience a seamless and immersive cinematic journey.
            </p>
            <div className="scroll-indicator">↓ Scroll to explore ↓</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
