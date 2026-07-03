import Link from "next/link";
import { FileText, Phone, Bot, ChevronRight, Store, Pill, UtensilsCrossed } from "lucide-react";
import StoreCard from "../components/StoreCard";
import ProductCard from "../components/ProductCard";

export default function Pharmacy() {
  const categories = [
    "Prescription Medicine", "OTC Medicine", "Vitamins", "Baby Care", 
    "Mother Care", "Personal Care", "Skin Care", "Diabetic Care"
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background pb-20">
      
      {/* 1. Hero Slider */}
      <div className="px-4 md:px-8 py-4">
        <div className="w-full h-40 md:h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center p-6 text-white shadow-sm relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left md:w-full md:px-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3">Health Campaign</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Winter Wellness Kit</h2>
            <p className="text-sm md:text-base opacity-90 max-w-md">Up to 30% off on all winter care essentials and vitamins.</p>
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
        <Link href="/pharmacy" className="flex items-center gap-2 pb-3 border-b-2 border-brand-primary text-brand-primary font-bold transition-colors whitespace-nowrap px-2">
          <Pill className="w-5 h-5" />
          <span className="text-sm md:text-base">Pharmacy</span>
        </Link>
        <Link href="/restaurant" className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 font-medium transition-colors whitespace-nowrap px-2">
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-sm md:text-base">Restaurant</span>
        </Link>
      </div>

      {/* 2. All Pharmacy Categories */}
      <div className="mt-4 px-4 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Pharmacy Categories</h2>
          <button className="text-sm font-bold text-brand-primary flex items-center hover:text-green-700 transition-colors">
            View All <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {categories.map((cat, i) => (
            <button key={i} className="px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap bg-white border border-gray-100 text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm flex-shrink-0">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Nearest Pharmacy Stores */}
      <div className="mt-8 px-4 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Nearest Pharmacy Stores</h2>
          <button className="text-sm font-bold text-brand-primary flex items-center hover:text-green-700 transition-colors">
            Browse All <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          <div className="w-72 md:w-80 flex-shrink-0"><StoreCard /></div>
          <div className="w-72 md:w-80 flex-shrink-0"><StoreCard /></div>
          <div className="w-72 md:w-80 flex-shrink-0"><StoreCard /></div>
        </div>
      </div>

      {/* 4. AI Pharmacy Assistant & Call Center */}
      <div className="mt-6 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* AI Assistant */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 rounded-2xl p-5 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Bot className="w-24 h-24 text-blue-600" />
          </div>
          <div className="relative z-10">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">AI Pharmacy Assistant</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-[200px]">Search medicines, check symptoms, and get recommendations instantly.</p>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm">Chat Now</button>
          </div>
        </div>

        {/* Call Center Support */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-5 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Phone className="w-24 h-24 text-green-600" />
          </div>
          <div className="relative z-10">
            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mb-3 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Need Help? Call Us</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-[220px]">Get free assistance to find medicines or upload prescriptions.</p>
            <button className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-lg shadow-sm">Call Center Support</button>
          </div>
        </div>

        <div className="md:col-span-2 bg-blue-50/50 border border-blue-100 rounded-xl p-3 text-xs md:text-sm text-gray-600 text-center">
          কোনো ওষুধ খুঁজে পেতে, প্রেসক্রিপশন বুঝতে বা অর্ডার করতে সাহায্যের প্রয়োজন হলে <strong>"Need Help? Contact Our Call Center"</strong> বাটনে ট্যাপ করুন। আমাদের কাস্টমার সাপোর্ট টিম আপনাকে ফোন করে সহায়তা করবে। এই সহায়তার জন্য কোনো <strong>অতিরিক্ত চার্জ প্রযোজ্য নয়</strong>।
        </div>
      </div>

      {/* 5. Upload Prescription */}
      <div className="mt-8 px-4 md:px-8">
        <div className="bg-white border-2 border-dashed border-brand-primary/30 rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-sm hover:border-brand-primary transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-4 group-hover:scale-110 transition-transform">
            <FileText className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Upload Prescription</h2>
          <p className="text-sm text-gray-500 max-w-md mb-6">
            আপনার প্রেসক্রিপশন আপলোড করুন। আমাদের সিস্টেম প্রেসক্রিপশন থেকে ওষুধ শনাক্ত করবে এবং নিকটস্থ ফার্মেসিগুলো থেকে উপলব্ধ ওষুধের তালিকা দেখাবে।
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-sm hover:bg-green-700 transition-colors">
              Capture from Camera
            </button>
          </div>
        </div>
      </div>

      {/* 6. Recommended Medicines */}
      <div className="mt-10 px-4 md:px-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Recommended Medicines</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <ProductCard key={`rec-${item}`} />
          ))}
        </div>
      </div>

      {/* 7. Health Care Products */}
      <div className="mt-10 px-4 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Health Care Products</h2>
          <button className="text-sm font-bold text-brand-primary flex items-center hover:text-green-700 transition-colors">
            View All <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4].map((item) => (
            <ProductCard key={`health-${item}`} />
          ))}
        </div>
      </div>

      {/* 8. Popular Pharmacy Products */}
      <div className="mt-10 px-4 md:px-8 mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Popular Pharmacy Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ProductCard key={`pop-${item}`} />
          ))}
        </div>
      </div>

    </div>
  );
}
