import { MapPin, Search, Bell, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Mobile: Location & Profile/Cart | Desktop: Logo & Location */}
        <div className="flex items-center gap-2 flex-1 md:flex-none">
          <MapPin className="w-5 h-5 text-brand-primary" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium leading-none">Delivering to</span>
            <span className="text-sm font-semibold truncate max-w-[150px] md:max-w-xs text-brand-primary">Mohakhali, Dhaka</span>
          </div>
        </div>

        {/* Search Bar - hidden on very small screens, visible on md */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for groceries, pharmacy or food..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="hidden md:block p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Mobile Search - visible only on small screens below header */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for groceries, pharmacy or food..."
            className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
          />
        </div>
      </div>
    </header>
  );
}
