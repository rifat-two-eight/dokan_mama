import { Home, Search, ShoppingBag, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-brand-primary">
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-brand-primary transition-colors">
          <Search className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-brand-primary transition-colors relative">
          <ShoppingBag className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Cart</span>
          <span className="absolute top-2 right-1/2 translate-x-3 w-2 h-2 bg-red-500 rounded-full"></span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-brand-primary transition-colors">
          <User className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Profile</span>
        </a>
      </div>
    </div>
  );
}
