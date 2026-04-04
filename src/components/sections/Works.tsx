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
            <div className="description flex flex-col gap-5 text-[1.1rem]">
              <p className="text-white font-medium text-[1.4rem] leading-snug">
                I’m Babu Natarajan — an Embedded Systems & IOT Engineer focused on building reliable, real-time systems that work beyond controlled environments.
              </p>
              <p>
                My work lies at the intersection of hardware and intelligence — from low-level microcontroller development to deploying AI models on edge devices like Raspberry Pi and dedicated accelerators.
              </p>
              <p>
                I don’t just build systems that run — I build systems that keep running.
                Systems that can handle real-world conditions, unexpected failures, and long-term operation without constant intervention.
              </p>
              <p>
                Over time, I’ve worked across Arduino, ESP32, Raspberry Pi, and edge AI platforms — building IoT automation systems, communication pipelines, and computer vision applications.
              </p>
              <p>
                My approach is simple: understand the system deeply, design for failure, and keep things as simple and robust as possible.
              </p>
              <p className="italic text-gray-300">
                Because real systems don’t fail in theory — they fail in production.
              </p>
              <p>
                I enjoy solving problems where hardware, software, and AI must work together — because that’s where real engineering begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
