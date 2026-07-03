"use client";

import { useState } from "react";
import { Search, QrCode, SlidersHorizontal, ChevronRight, Package, Truck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Running", "In Progress", "Ready for Pickup", "Out for Delivery", "Delivered", "Cancelled"];

  const orders = [
    {
      id: "ORD-10235",
      date: "05 July 2026",
      store: "Fresh Grocery",
      items: 8,
      total: 1560,
      status: "Delivered",
      isActive: false
    },
    {
      id: "ORD-10236",
      date: "06 July 2026",
      store: "Quick Pharmacy",
      items: 3,
      total: 450,
      status: "Out for Delivery",
      isActive: true
    },
    {
      id: "ORD-10237",
      date: "06 July 2026",
      store: "Burger King",
      items: 2,
      total: 890,
      status: "Preparing",
      isActive: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Delivered": return "bg-green-100 text-green-700";
      case "Out for Delivery": return "bg-blue-100 text-blue-700";
      case "Preparing": return "bg-orange-100 text-orange-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Delivered": return <CheckCircle2 className="w-4 h-4" />;
      case "Out for Delivery": return <Truck className="w-4 h-4" />;
      case "Preparing": return <Package className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6 pb-24">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Order History</h1>

      {/* Top Search & Filter Bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Order ID or Store..."
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-primary transition-colors">
            <QrCode className="w-5 h-5" />
          </button>
        </div>
        <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 shadow-sm transition-colors">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 custom-scrollbar">
        {tabs.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab 
                ? "bg-brand-primary text-white shadow-sm" 
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Order List */}
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{order.store}</h3>
                  <span className="text-xs text-gray-500 font-medium">Order: {order.id}</span>
                  <div className="text-xs text-gray-400 mt-0.5">{order.date}</div>
                </div>
              </div>
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] md:text-xs font-bold ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
                <span className="hidden sm:inline">{order.status}</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-y border-gray-100 mb-4">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium">Items</span>
                <span className="font-semibold text-gray-900">{order.items} Products</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-500 font-medium">Total</span>
                <span className="font-bold text-brand-primary">৳{order.total}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href={`/orders/${order.id}`} className="flex-1 py-2.5 text-center text-sm font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                View Details
              </Link>
              {order.isActive && (
                <button className="flex-1 py-2.5 text-center text-sm font-bold text-white bg-brand-primary hover:bg-green-700 rounded-xl transition-colors shadow-sm">
                  Track Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
