import { Star, MapPin, Clock, Truck, ChevronLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

export default function StoreDetails() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background pb-20">
      
      {/* Cover Photo */}
      <div className="h-48 md:h-64 bg-gray-200 w-full relative">
        <Link href="/stores" className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors z-10 shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Store Info Header */}
      <div className="px-4 md:px-8 -mt-12 relative z-10 mb-8">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl border-4 border-white shadow-sm flex-shrink-0"></div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Daily Fresh Market</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-1 font-semibold text-gray-800">
                  <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                  4.8 (120+ Reviews)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  1.2 km away
                </span>
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <Clock className="w-4 h-4" />
                  Open Now
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Truck className="w-4 h-4 text-gray-400" />
              <span className="font-medium">Delivery: <span className="text-brand-primary">Free</span></span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="font-medium">25-30 mins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Store Categories */}
      <div className="px-4 md:px-8 mb-8">
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {["All", "Vegetables", "Fruits", "Dairy", "Meat", "Snacks", "Beverages"].map((cat, i) => (
            <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-brand-primary text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-4 md:px-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Vegetables</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>
      </div>

    </div>
  );
}
