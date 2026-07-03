import { User, MapPin, Package, CreditCard, Heart, Bell, Settings, LogOut, ChevronRight } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background px-4 md:px-8 py-4 md:py-6">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Profile</h1>

      {/* User Info Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex items-center gap-5">
        <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
          <User className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Rifat</h2>
          <p className="text-gray-500 text-sm mb-2">+880 1712-345678</p>
          <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">GOLD MEMBER</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Menu Items */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <MenuRow icon={<Package />} title="Order History" subtitle="View your past orders" />
            <div className="border-t border-gray-100"></div>
            <MenuRow icon={<MapPin />} title="Saved Addresses" subtitle="Manage delivery locations" />
            <div className="border-t border-gray-100"></div>
            <MenuRow icon={<CreditCard />} title="Payment Methods" subtitle="Manage your cards & wallets" />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <MenuRow icon={<Heart />} title="Favourites" subtitle="Saved stores and products" />
            <div className="border-t border-gray-100"></div>
            <MenuRow icon={<Bell />} title="Notifications" subtitle="Update preferences" />
            <div className="border-t border-gray-100"></div>
            <MenuRow icon={<Settings />} title="Settings" subtitle="App language and settings" />
          </div>

          <button className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-center gap-2 text-red-500 font-bold hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>

        {/* Quick Stats / Side area */}
        <div className="hidden md:flex flex-col gap-4">
          <div className="bg-brand-primary rounded-2xl p-5 text-white shadow-sm">
            <h3 className="font-semibold mb-1 opacity-90">Total Orders</h3>
            <span className="text-3xl font-bold">42</span>
          </div>
          <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 shadow-sm">
            <h3 className="font-semibold text-orange-900 mb-1">Wallet Balance</h3>
            <span className="text-3xl font-bold text-orange-600">৳1,250</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function MenuRow({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm md:text-base">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  );
}
