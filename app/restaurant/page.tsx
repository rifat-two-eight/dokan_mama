import Link from "next/link";
import { ChevronRight, Search, Clock, MapPin, Star, UtensilsCrossed, Store, Pill } from "lucide-react";
import StoreCard from "../components/StoreCard";
import ProductCard from "../components/ProductCard";

export default function Restaurant() {
  const restaurantCategories = [
    "Fast Food", "Chinese", "Bengali", "Indian", "Thai", 
    "American", "Italian", "Café", "Bakery", "Dessert"
  ];

  const foodCategories = [
    "Burger", "Pizza", "Biryani", "Fried Chicken", "Chinese Food",
    "Bengali Food", "Indian Food", "BBQ", "Pasta", "Coffee"
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background pb-20">
      
      {/* 1. Hero Slider */}
      <div className="px-4 md:px-8 py-4">
        <div className="w-full h-40 md:h-64 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center p-6 text-white shadow-sm relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left md:w-full md:px-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3">Flash Deal</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Buy 1 Get 1 Free</h2>
            <p className="text-sm md:text-base opacity-90 max-w-md">On all medium pizzas at Pizza Hut this weekend only!</p>
          </div>
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        </div>
      </div>

      {/* Main Service Tabs */}
      <div className="flex items-center justify-center gap-4 md:gap-8 mt-2 mb-4 border-b border-gray-200 overflow-x-auto custom-scrollbar px-4">
        <Link href="/" className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors whitespace-nowrap px-2">
          <Store className="w-5 h-5" />
          <span className="text-sm md:text-base">Normal Store</span>
        </Link>
        <Link href="/pharmacy" className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors whitespace-nowrap px-2">
          <Pill className="w-5 h-5" />
          <span className="text-sm md:text-base">Pharmacy</span>
        </Link>
        <Link href="/restaurant" className="flex items-center gap-2 pb-3 border-b-2 border-brand-primary text-brand-primary font-bold transition-colors whitespace-nowrap px-2">
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-sm md:text-base">Restaurant</span>
        </Link>
      </div>

      {/* 2. Restaurant Categories */}
      <div className="mt-4 px-4 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Restaurant Categories</h2>
          <button className="text-sm font-bold text-brand-primary flex items-center hover:text-green-700 transition-colors">
            View All <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {restaurantCategories.map((cat, i) => (
            <button key={`rc-${i}`} className="px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap bg-white border border-gray-100 text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm flex-shrink-0">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Food Categories */}
      <div className="mt-8 px-4 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Food Categories</h2>
          <button className="text-sm font-bold text-brand-primary flex items-center hover:text-green-700 transition-colors">
            View All <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {foodCategories.map((cat, i) => (
            <button key={`fc-${i}`} className="px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap bg-orange-50 border border-orange-100 text-orange-700 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm flex-shrink-0">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Nearest Restaurants */}
      <div className="mt-8 px-4 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Nearest Restaurants</h2>
          <button className="text-sm font-bold text-brand-primary flex items-center hover:text-green-700 transition-colors">
            Browse All <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        
        {/* We use the StoreCard component, but imagine it with restaurant-specific data (rating, distance, time, delivery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={`nr-${item}`} className="w-full flex-shrink-0">
              <StoreCard />
            </div>
          ))}
        </div>
      </div>

      {/* 5. Food Items Near You */}
      <div className="mt-10 px-4 md:px-8 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Food Items Near You</h2>
          <button className="text-sm font-bold text-brand-primary flex items-center hover:text-green-700 transition-colors">
            Browse All <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <ProductCard key={`fi-${item}`} />
          ))}
        </div>
      </div>

    </div>
  );
}
