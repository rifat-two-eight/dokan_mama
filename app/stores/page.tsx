import StoreCard from "../components/StoreCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function AllStores() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6">
      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">All Stores</h1>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search stores..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <button className="px-4 py-2.5 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-sm font-medium text-brand-primary whitespace-nowrap">
            Nearest
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap">
            Top Rated
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap">
            Free Delivery
          </button>
        </div>
      </div>

      {/* Store Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <StoreCard key={item} />
        ))}
      </div>
      
    </div>
  );
}
