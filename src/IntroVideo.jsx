import introVideo from "./assets/imgs/SlideHome/7543294496204.mp4";

function VideoSection() {
  return (
    <video
      src={introVideo}
      controls
      autoPlay
      muted
      loop
      className="w-full h-auto rounded-lg"
    />
  );
}

export default VideoSection;
