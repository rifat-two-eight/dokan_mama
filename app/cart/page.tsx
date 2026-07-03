import { MapPin, ChevronRight, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Cart Items List */}
        <div className="flex-1 flex flex-col gap-4">
          
          {/* Store Group */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                <h3 className="font-bold text-gray-900">Daily Fresh Market</h3>
              </div>
              <span className="text-sm font-semibold text-gray-500">Delivery: ৳40</span>
            </div>
            
            {/* Cart Item */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Premium Oat Milk 1L</h4>
                <span className="font-bold text-brand-primary">৳350</span>
              </div>
              <div className="flex flex-col items-end gap-3">
                <button className="text-red-400 hover:text-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 bg-gray-50 rounded-full border border-gray-200">
                  <button className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-700">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">1</span>
                  <button className="w-7 h-7 flex items-center justify-center text-brand-primary hover:text-green-700">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Order Summary & Checkout */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">৳350</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Charge</span>
                <span className="font-semibold text-gray-900">৳40</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-semibold text-green-600">-৳20</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-6">
              <span className="text-gray-600 font-medium">Total</span>
              <span className="text-xl font-bold text-gray-900">৳370</span>
            </div>

            {/* Delivery Address Box */}
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 mb-6 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-medium mb-0.5">Deliver to</span>
                  <span className="block text-sm font-semibold text-gray-900 truncate max-w-[150px]">Home - Mohakhali</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <button className="w-full bg-brand-primary hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm">
              Proceed to Checkout
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
