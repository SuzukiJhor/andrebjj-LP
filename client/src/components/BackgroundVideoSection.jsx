import LazyVideo from "@/components/LazyVideo";

export default function BackgroundVideoSection() {
  
    return (
        <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">

            {/* VIDEO */}
            <LazyVideo src="https://iulfmfgpbuhnoosdmktj.supabase.co/storage/v1/object/public/videos/bjj.mp4" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
                    Técnica em Movimento
                </h2>

                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Cada treino é uma evolução. Cada queda, um aprendizado.
                </p>
            </div>

        </section>
    );
}
