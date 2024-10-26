export default async function VideoComponent() {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
      preload="auto"
      style={{ transform: "scaleX(-1)" }}
    >
      <source src="/safeer banner ved.mp4" type="video/mp4" />
      {/* <source src="/video.webm" type="video/webm" /> */}
      Your browser does not support the video tag.
    </video>
  );
}
