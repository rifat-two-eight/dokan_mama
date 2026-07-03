import { Star, Clock } from "lucide-react";

export default function StoreCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
      {/* Cover Image Placeholder */}
      <div className="h-32 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
        <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
          4.8
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-bold text-gray-700 shadow-sm">
          1.2 km
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-bold text-gray-900 text-base truncate mb-1">Daily Fresh Market</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded">FREE DELIVERY</span>
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            25-30 mins
          </span>
        </div>
      </div>
    </div>
  );
}
