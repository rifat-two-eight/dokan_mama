import { Heart, Plus } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer relative group flex flex-col h-full">
      <button className="absolute top-2 right-2 p-1.5 bg-gray-100/80 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full z-10 transition-colors backdrop-blur-sm">
        <Heart className="w-4 h-4" />
      </button>
      
      {/* Product Image Placeholder */}
      <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full h-full bg-gray-200 rounded-lg group-hover:scale-105 transition-transform duration-500"></div>
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">BEVERAGES</span>
        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-3 line-clamp-2">Premium Oat Milk 1L</h3>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-end gap-1">
            <span className="text-brand-primary font-bold text-lg leading-none">৳350</span>
          </div>
          <button className="w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
