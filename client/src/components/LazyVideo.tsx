import { useEffect, useRef, useState } from "react";

export default function LazyVideo({ src }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [show, setShow] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function toggleSound() {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  }

  return (
    <div ref={ref} className="absolute inset-0">
      {show && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* BOTÃO SOM */}
          <button
            onClick={toggleSound}
            className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur px-4 py-2 text-white text-sm rounded-full hover:bg-black/80 transition"
          >
            {muted ? "🔇 Ativar Som" : "🔊 Som Ligado"}
          </button>
        </>
      )}
    </div>
  );
}
