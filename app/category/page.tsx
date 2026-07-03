"use client";

import { useState } from "react";
import { Store, Pill, UtensilsCrossed, ShoppingBag, ShoppingCart, HeartPulse, Pizza } from "lucide-react";

export default function CategoryPage() {
  const [mainTab, setMainTab] = useState<"shop" | "product">("shop");
  const [subTab, setSubTab] = useState<"normal" | "pharmacy" | "restaurant">("normal");

  // Mock data for categories based on selections
  const categories = {
    shop: {
      normal: [
        { name: "Grocery", icon: "🧺", color: "bg-green-50" },
        { name: "Fruits & Vegetables", icon: "🍎", color: "bg-red-50" },
        { name: "Stationery", icon: "📏", color: "bg-blue-50" },
        { name: "Electronics", icon: "💻", color: "bg-gray-50" },
        { name: "Gadgets", icon: "🎧", color: "bg-purple-50" },
        { name: "Fashion", icon: "👕", color: "bg-pink-50" },
        { name: "Cosmetics", icon: "💄", color: "bg-rose-50" },
        { name: "Pet Shop", icon: "🐾", color: "bg-amber-50" },
      ],
      pharmacy: [
        { name: "General Pharmacy", icon: "🏥", color: "bg-blue-50" },
        { name: "24/7 Pharmacy", icon: "🕒", color: "bg-indigo-50" },
        { name: "Medical Equipment", icon: "⚕️", color: "bg-cyan-50" },
        { name: "Health Care", icon: "❤️", color: "bg-rose-50" },
        { name: "Diagnostic", icon: "🔬", color: "bg-purple-50" },
      ],
      restaurant: [
        { name: "Fast Food", icon: "🍔", color: "bg-orange-50" },
        { name: "Chinese", icon: "🍜", color: "bg-red-50" },
        { name: "Bengali", icon: "🍛", color: "bg-green-50" },
        { name: "Indian", icon: "🥘", color: "bg-yellow-50" },
        { name: "Cafe", icon: "☕", color: "bg-amber-50" },
        { name: "Bakery", icon: "🥐", color: "bg-yellow-100" },
        { name: "Dessert", icon: "🍰", color: "bg-pink-50" },
        { name: "Cloud Kitchen", icon: "☁️", color: "bg-sky-50" },
      ]
    },
    product: {
      normal: [
        { name: "Rice", icon: "🍚", color: "bg-gray-100" },
        { name: "Oil", icon: "🛢️", color: "bg-yellow-50" },
        { name: "Milk", icon: "🥛", color: "bg-blue-50" },
        { name: "Snacks", icon: "🥨", color: "bg-orange-50" },
        { name: "Beverages", icon: "🥤", color: "bg-red-50" },
        { name: "Mobile Accessories", icon: "📱", color: "bg-slate-50" },
      ],
      pharmacy: [
        { name: "Prescription", icon: "📝", color: "bg-blue-50" },
        { name: "OTC Medicine", icon: "💊", color: "bg-red-50" },
        { name: "Vitamins", icon: "🌿", color: "bg-green-50" },
        { name: "Baby Care", icon: "🍼", color: "bg-pink-50" },
        { name: "Personal Care", icon: "🧴", color: "bg-purple-50" },
        { name: "Winter Care", icon: "❄️", color: "bg-sky-50" },
      ],
      restaurant: [
        { name: "Pizza", icon: "🍕", color: "bg-orange-50" },
        { name: "Burger", icon: "🍔", color: "bg-red-50" },
        { name: "Fried Chicken", icon: "🍗", color: "bg-amber-50" },
        { name: "Biryani", icon: "🥘", color: "bg-yellow-50" },
        { name: "Seafood", icon: "🦐", color: "bg-cyan-50" },
        { name: "Coffee", icon: "☕", color: "bg-stone-50" },
      ]
    }
  };

  const currentCategories = categories[mainTab][subTab];

  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6 pb-24">
      
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Category</h1>

      {/* Main Tabs (Shop vs Product) */}
      <div className="flex bg-gray-100 p-1 rounded-xl mb-6 max-w-md mx-auto md:mx-0">
        <button 
          onClick={() => setMainTab("shop")}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            mainTab === "shop" ? "bg-white text-brand-primary shadow-sm" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Shop Category
        </button>
        <button 
          onClick={() => setMainTab("product")}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            mainTab === "product" ? "bg-white text-brand-primary shadow-sm" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Product Category
        </button>
      </div>

      {/* Sub Tabs (Normal, Pharmacy, Restaurant) */}
      <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar mb-4">
        <button 
          onClick={() => setSubTab("normal")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${
            subTab === "normal" 
              ? "bg-brand-primary border-brand-primary text-white shadow-sm" 
              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {mainTab === "shop" ? <Store className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
          {mainTab === "shop" ? "Normal Store" : "Normal Store Products"}
        </button>

        <button 
          onClick={() => setSubTab("pharmacy")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${
            subTab === "pharmacy" 
              ? "bg-brand-primary border-brand-primary text-white shadow-sm" 
              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {mainTab === "shop" ? <Pill className="w-4 h-4" /> : <HeartPulse className="w-4 h-4" />}
          {mainTab === "shop" ? "Pharmacy" : "Pharmacy Products"}
        </button>

        <button 
          onClick={() => setSubTab("restaurant")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${
            subTab === "restaurant" 
              ? "bg-brand-primary border-brand-primary text-white shadow-sm" 
              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {mainTab === "shop" ? <UtensilsCrossed className="w-4 h-4" /> : <Pizza className="w-4 h-4" />}
          {mainTab === "shop" ? "Restaurant" : "Restaurant Products"}
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 mt-2">
        {currentCategories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-2 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-3xl ${cat.color} group-hover:scale-105 transition-transform`}>
              {cat.icon}
            </div>
            <span className="text-[11px] md:text-xs font-bold text-gray-800 text-center leading-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
