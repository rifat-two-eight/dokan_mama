export default function HeroSlider() {
  return (
    <div className="w-full relative mb-6">
      <div className="w-full h-48 md:h-64 bg-gradient-to-r from-brand-primary to-green-700 rounded-2xl overflow-hidden relative shadow-lg">
        {/* Placeholder for image */}
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        
        <div className="relative h-full flex flex-col justify-center px-6 md:px-10 z-10">
          <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-3 backdrop-blur-sm">
            Flash Delivery
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white max-w-[280px] md:max-w-md leading-tight mb-4">
            Fresh Groceries Delivered in 20 Mins
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full w-fit transition-colors shadow-md">
            Shop Now
          </button>
        </div>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        <div className="w-6 h-1.5 bg-white rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
      </div>
    </div>
  );
}
