import Link from "next/link";
import { Store, Pill, UtensilsCrossed, Upload, Phone } from "lucide-react";
import StoreCard from "../components/StoreCard";
import ProductCard from "../components/ProductCard";

export default function PharmacyHome() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6">
      
      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-6 md:gap-12 mb-6 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors">
          <Store className="w-5 h-5" />
          <span className="text-sm md:text-base">Grocery</span>
        </Link>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-brand-primary text-brand-primary font-bold transition-colors">
          <Pill className="w-5 h-5" />
          <span className="text-sm md:text-base">Pharmacy</span>
        </button>
        <Link href="/restaurant" className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors">
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-sm md:text-base">Cookupx</span>
        </Link>
      </div>

      {/* Prescription Upload & Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-1">Upload Prescription</h3>
            <p className="text-sm text-blue-700">Order medicines directly from prescription</p>
          </div>
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-sm">
            <Upload className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
          <div>
            <h3 className="font-bold text-green-900 text-lg mb-1">Need Help?</h3>
            <p className="text-sm text-green-700">Call our pharmacist for assistance</p>
          </div>
          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-sm">
            <Phone className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Pharmacy Categories */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Pharmacy Categories</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
          {[
            { name: "Medicine", icon: "💊", color: "bg-red-50 text-red-700" },
            { name: "Baby Care", icon: "🍼", color: "bg-blue-50 text-blue-700" },
            { name: "Personal Care", icon: "🧴", color: "bg-purple-50 text-purple-700" },
            { name: "Health Care", icon: "🩺", color: "bg-teal-50 text-teal-700" },
            { name: "Vitamins", icon: "🌿", color: "bg-green-50 text-green-700" },
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

      {/* Preferred Medicine */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Preferred Medicines</h2>
          <button className="text-sm font-semibold text-brand-primary hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>
      </section>

      {/* Browse Nearest Pharmacy */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Nearest Pharmacies</h2>
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
