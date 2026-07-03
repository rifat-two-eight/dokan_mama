import { ShoppingCart, Pill, Utensils, Heart, Ticket, HelpCircle, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-65px)] sticky top-[65px] bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden p-4 custom-scrollbar">
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Categories</h3>
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-brand-primary/10 text-brand-primary font-medium rounded-lg transition-colors">
            <ShoppingCart className="w-5 h-5" />
            Normal Store
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 font-medium rounded-lg transition-colors">
            <Pill className="w-5 h-5" />
            Pharmacy
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 font-medium rounded-lg transition-colors">
            <Utensils className="w-5 h-5" />
            Restaurant
          </a>
        </nav>
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Departments</h3>
        <nav className="space-y-1">
          {['Grocery', 'Fruits & Vegetables', 'Meat & Fish', 'Electronics', 'Fashion', 'Pet Care'].map((item) => (
            <a key={item} href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 text-sm rounded-lg transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-brand-primary text-sm rounded-lg transition-colors">
            <Heart className="w-4 h-4" />
            Saved Stores
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-brand-primary text-sm rounded-lg transition-colors">
            <Ticket className="w-4 h-4" />
            Coupons & Offers
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-brand-primary text-sm rounded-lg transition-colors">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </a>
        </nav>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #d1d5db;
        }
      `}</style>
    </aside>
  );
}
