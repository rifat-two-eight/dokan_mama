import Link from "next/link";
import { Store, Pill, UtensilsCrossed } from "lucide-react";
import StoreCard from "../components/StoreCard";
import ProductCard from "../components/ProductCard";

export default function RestaurantHome() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6">
      
      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-6 md:gap-12 mb-6 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors">
          <Store className="w-5 h-5" />
          <span className="text-sm md:text-base">Grocery</span>
        </Link>
        <Link href="/pharmacy" className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors">
          <Pill className="w-5 h-5" />
          <span className="text-sm md:text-base">Pharmacy</span>
        </Link>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-brand-primary text-brand-primary font-bold transition-colors">
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-sm md:text-base">Cookupx</span>
        </button>
      </div>

      {/* Restaurant Types */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Cuisines & More</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
          {[
            { name: "Fast Food", icon: "🍔", color: "bg-red-50 text-red-700" },
            { name: "Chinese", icon: "🍜", color: "bg-orange-50 text-orange-700" },
            { name: "Cafe", icon: "☕", color: "bg-amber-50 text-amber-700" },
            { name: "Bakery", icon: "🥐", color: "bg-yellow-50 text-yellow-700" },
            { name: "Dessert", icon: "🍰", color: "bg-pink-50 text-pink-700" },
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

      {/* Discount Food */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Discount Food</h2>
          <button className="text-sm font-semibold text-brand-primary hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>
      </section>

      {/* Browse Nearest Restaurants */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Nearest Restaurants</h2>
          <Link href="/stores" className="text-sm font-semibold text-brand-primary hover:underline">Browse All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </section>
      
    </div>
  );
}
