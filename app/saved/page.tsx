"use client";

import { useState } from "react";
import { Store, ShoppingBag, MapPin, Star, Trash2, Share2, HeartCrack, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SavedPage() {
  const [activeTab, setActiveTab] = useState<"stores" | "products">("stores");

  // Mock data to simulate saved items. You can set to empty arrays to see the empty states.
  const savedStores = [
    {
      id: 1,
      name: "Fresh Grocery",
      category: "Normal Store",
      address: "Dhanmondi, Dhaka",
      distance: "1.2 km",
      deliveryCharge: "40",
      rating: 4.8,
      reviews: 1245
    },
    {
      id: 2,
      name: "Care Pharmacy",
      category: "Pharmacy",
      address: "Banani, Dhaka",
      distance: "2.5 km",
      deliveryCharge: "60",
      rating: 4.5,
      reviews: 890
    }
  ];

  const savedProducts = [
    {
      id: 1,
      name: "Fresh Organic Apple",
      price: "320",
      unit: "kg",
      description: "Premium quality fresh organic apples, directly collected from local farms."
    },
    {
      id: 2,
      name: "Premium Oat Milk 1L",
      price: "350",
      unit: "pack",
      description: "Rich and creamy oat milk, perfect for your morning coffee or cereal."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6 pb-24">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Saved / Favorites</h1>

      {/* Main Tabs */}
      <div className="flex bg-gray-100 p-1 rounded-xl mb-6 max-w-md mx-auto md:mx-0">
        <button 
          onClick={() => setActiveTab("stores")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            activeTab === "stores" ? "bg-white text-brand-primary shadow-sm" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <Store className="w-4 h-4" />
          Stores
        </button>
        <button 
          onClick={() => setActiveTab("products")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            activeTab === "products" ? "bg-white text-brand-primary shadow-sm" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Products
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        
        {/* Stores Content */}
        {activeTab === "stores" && (
          <div className="flex flex-col gap-4">
            {savedStores.length > 0 ? (
              savedStores.map((store) => (
                <div key={store.id} className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4 group">
                  <div className="w-full md:w-32 h-32 md:h-24 bg-gray-100 rounded-xl flex-shrink-0 relative overflow-hidden">
                    <div className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-red-500 shadow-sm backdrop-blur-sm cursor-pointer hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{store.name}</h3>
                        <span className="text-xs font-semibold text-brand-primary px-2 py-0.5 bg-brand-primary/10 rounded-md">
                          {store.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 font-bold text-gray-900 text-sm">
                        <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                        {store.rating} <span className="text-gray-400 font-medium text-xs">({store.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {store.address}</span>
                      <span className="flex items-center gap-1 font-medium text-gray-500">• {store.distance} Away</span>
                      <span className="flex items-center gap-1 font-medium text-brand-primary">• Delivery: ৳{store.deliveryCharge}</span>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center gap-2 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 md:w-32 flex-shrink-0">
                    <Link href={`/stores/${store.id}`} className="flex-1 w-full py-2 bg-brand-primary/10 text-brand-primary font-bold rounded-lg text-sm text-center hover:bg-brand-primary hover:text-white transition-colors">
                      View Store
                    </Link>
                    <button className="p-2 text-gray-400 bg-gray-50 rounded-lg hover:text-brand-primary transition-colors border border-gray-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-6">
                  <Store className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">No Saved Stores Yet</h2>
                <p className="text-gray-500 mb-6 max-w-sm">Save your favorite stores for quick access next time you shop.</p>
                <Link href="/stores" className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-sm">
                  Browse Stores
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Products Content */}
        {activeTab === "products" && (
          <div className="flex flex-col gap-4">
            {savedProducts.length > 0 ? (
              savedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-full sm:w-28 h-40 sm:h-28 bg-gray-100 rounded-xl flex-shrink-0 relative">
                    <div className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-red-500 shadow-sm backdrop-blur-sm cursor-pointer hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
                    <div className="font-bold text-brand-primary text-lg mb-2">
                      ৳{product.price} <span className="text-sm text-gray-400 font-medium">/ {product.unit}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2 md:line-clamp-none max-w-lg">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 sm:w-32 sm:flex-col flex-shrink-0">
                    <button className="flex-1 w-full py-2 bg-brand-primary text-white font-bold rounded-lg text-sm text-center hover:bg-green-700 transition-colors shadow-sm">
                      Add to Cart
                    </button>
                    <button className="p-2 text-gray-500 bg-gray-50 border border-gray-200 rounded-lg hover:text-gray-900 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-6">
                  <HeartCrack className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">No Saved Products Yet</h2>
                <p className="text-gray-500 mb-6 max-w-sm">Save your favorite products to find them easily later when you want to buy.</p>
                <Link href="/category" className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-sm">
                  Browse Products
                </Link>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
