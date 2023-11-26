export default function MarqueeStrip() {
  return (
    <div className="relative flex overflow-x auto h-full mt-2 bg-gradient-to-r from-blue-800 to-indigo-900 transform skew-y-minus-4">
      <div className="py-3 animate-marquee whitespace-nowrap">
        <span className="mx-4 text-3xl text-white">CLAT</span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">
          NATIONAL LAW TRAINING INSTITUTE
        </span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">NLSAT</span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">OLET</span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">AILET</span>
        <span className="mx-4 text-3xl text-white">•</span>
      </div>

      <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
        <span className="mx-4 text-3xl text-white">CLAT</span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">
          NATIONAL LAW TRAINING INSTITUTE
        </span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">NLSAT</span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">OLET</span>
        <span className="mx-4 text-3xl text-white">•</span>
        <span className="mx-4 text-3xl text-white">AILET</span>
        <span className="mx-4 text-3xl text-white">•</span>
      </div>
    </div>
  );
}
