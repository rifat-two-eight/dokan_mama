import HeroSlider from "./components/HeroSlider";
import StoreCard from "./components/StoreCard";
import ProductCard from "./components/ProductCard";
import { Store, Pill, UtensilsCrossed, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6">
      
      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-6 md:gap-12 mb-6 border-b border-gray-200">
        <button className="flex items-center gap-2 pb-3 border-b-2 border-brand-primary text-brand-primary font-bold transition-colors">
          <Store className="w-5 h-5" />
          <span className="text-sm md:text-base">Grocery</span>
        </button>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors">
          <Pill className="w-5 h-5" />
          <span className="text-sm md:text-base">Pharmacy</span>
        </button>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors">
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-sm md:text-base">Cookupx</span>
        </button>
      </div>

      <HeroSlider />

      {/* Top Departments */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Top Departments</h2>
          <button className="text-sm font-semibold text-brand-primary hover:underline">See All</button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
          {[
            { name: "Groceries", icon: "🧺", color: "bg-green-50 text-green-700" },
            { name: "Electronics", icon: "📱", color: "bg-orange-50 text-orange-700" },
            { name: "Fashion", icon: "👕", color: "bg-pink-50 text-pink-700" },
            { name: "Pet Shop", icon: "🐾", color: "bg-amber-50 text-amber-700" },
            { name: "Household", icon: "🧹", color: "bg-blue-50 text-blue-700" },
          ].map((dept, i) => (
            <div key={i} className="min-w-[100px] flex flex-col items-center gap-2 snap-start cursor-pointer group">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl ${dept.color} group-hover:shadow-md transition-shadow`}>
                {dept.icon}
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-700 text-center">{dept.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Nearby Stores */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Popular Nearby Stores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </section>

      {/* Trending Products */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Trending Products</h2>
          <button className="text-sm font-semibold text-brand-primary hover:underline">Browse All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { name: "Dairy & Eggs", bg: "bg-blue-50" },
            { name: "Fruits & Veg", bg: "bg-green-50" },
            { name: "Bakery", bg: "bg-yellow-50" },
            { name: "Beverages", bg: "bg-purple-50" },
            { name: "Meat & Fish", bg: "bg-red-50" },
            { name: "Pantry", bg: "bg-orange-50" },
          ].map((cat, i) => (
            <div key={i} className={`${cat.bg} rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-md transition-all`}>
              <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-200 rounded-sm"></div>
              </div>
              <span className="text-xs font-bold text-gray-800 text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
