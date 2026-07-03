"use client";

import { useState } from "react";
import {
  User, Heart, Package, LayoutGrid, Sparkles, Tag, Ticket,
  Bot, HeadphonesIcon, Settings, Globe, LogOut,
  ChevronDown, ChevronRight, Store, ShoppingBag, Pill, UtensilsCrossed,
  ChevronLeft, Menu
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    categories: false,
    shopCategory: false,
    productCategory: false
  });

  const toggleMenu = (menu: string) => {
    if (isCollapsed) setIsCollapsed(false); // Auto-expand if clicking a menu while collapsed
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  const navItemClass = (active: boolean) =>
    `flex items-center gap-3 px-3 py-2.5 font-medium rounded-lg transition-colors whitespace-nowrap overflow-hidden ${active ? "bg-brand-primary/10 text-brand-primary" : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <aside
      className={`hidden md:flex flex-col h-[calc(100vh-65px)] sticky top-[65px] bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${isCollapsed ? "w-20" : "w-64"
        }`}
    >
      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-white border border-gray-200 text-gray-500 rounded-full p-1 hover:text-brand-primary hover:border-brand-primary transition-colors shadow-sm z-10"
      >
        {isCollapsed ? <Menu className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 custom-scrollbar flex flex-col gap-1">

        {/* 1. Profile Section */}
        <Link href="/profile" className={`flex items-center gap-3 p-3 mb-4 rounded-xl transition-colors border border-transparent hover:border-gray-200 hover:bg-gray-50 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
            <User className="w-5 h-5" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm leading-tight">Rifat</span>
              <span className="text-xs text-brand-primary font-medium">View Profile</span>
            </div>
          )}
        </Link>

        {/* 2. Saved / Favorites */}
        <Link href="/saved" className={navItemClass(pathname === "/saved")}>
          <Heart className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Saved / Favorites</span>}
        </Link>

        {/* 3. Order History */}
        <Link href="/orders" className={navItemClass(pathname.startsWith("/orders"))}>
          <Package className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Order History</span>}
        </Link>

        {/* 4. Categories (Collapsible) */}
        <div>
          <button
            onClick={() => toggleMenu("categories")}
            className={`w-full flex items-center justify-between px-3 py-2.5 font-medium rounded-lg transition-colors text-gray-600 hover:bg-gray-100 ${isCollapsed ? 'justify-center' : ''}`}
          >
            <div className="flex items-center gap-3">
              <LayoutGrid className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>Categories</span>}
            </div>
            {!isCollapsed && (
              <ChevronDown className={`w-4 h-4 transition-transform ${openMenus.categories ? "rotate-180" : ""}`} />
            )}
          </button>

          {/* Nested Categories */}
          {!isCollapsed && openMenus.categories && (
            <div className="pl-9 pr-2 py-1 flex flex-col gap-1 border-l-2 border-gray-100 ml-5 mt-1">

              {/* Shop Category */}
              <div>
                <button onClick={() => toggleMenu("shopCategory")} className="w-full flex items-center justify-between py-2 text-sm text-gray-600 hover:text-brand-primary font-medium">
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4" /> Shop Category
                  </div>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openMenus.shopCategory ? "rotate-180" : ""}`} />
                </button>
                {openMenus.shopCategory && (
                  <div className="pl-6 flex flex-col gap-1 py-1">
                    <Link href="/" className="text-sm text-gray-500 hover:text-brand-primary py-1">Normal Store</Link>
                    <Link href="/pharmacy" className="text-sm text-gray-500 hover:text-brand-primary py-1">Pharmacy</Link>
                    <Link href="/restaurant" className="text-sm text-gray-500 hover:text-brand-primary py-1">Restaurant</Link>
                  </div>
                )}
              </div>

              {/* Product Category */}
              <div>
                <button onClick={() => toggleMenu("productCategory")} className="w-full flex items-center justify-between py-2 text-sm text-gray-600 hover:text-brand-primary font-medium">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" /> Product Category
                  </div>
                  <ChevronDown className={`w-3 h-3 transition-transform ${openMenus.productCategory ? "rotate-180" : ""}`} />
                </button>
                {openMenus.productCategory && (
                  <div className="pl-6 flex flex-col gap-1 py-1">
                    <Link href="/category" className="text-sm text-gray-500 hover:text-brand-primary py-1 flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Grocery</Link>
                    <Link href="/category" className="text-sm text-gray-500 hover:text-brand-primary py-1 flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Electronics</Link>
                    <Link href="/category" className="text-sm text-gray-500 hover:text-brand-primary py-1 flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Medicine</Link>
                    <Link href="/category" className="text-sm text-gray-500 hover:text-brand-primary py-1 flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Food</Link>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* 5. New Arrivals */}
        <Link href="#" className={navItemClass(false)}>
          <Sparkles className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>New Arrivals</span>}
        </Link>

        {/* 6. Offers & Deals */}
        <Link href="#" className={navItemClass(false)}>
          <Tag className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Offers & Deals</span>}
        </Link>

        {/* 7. Coupons */}
        <Link href="#" className={navItemClass(false)}>
          <Ticket className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Coupons</span>}
        </Link>

        {/* 8. AI Shopping Assistant */}
        <Link href="#" className={navItemClass(false)}>
          <Bot className="w-5 h-5 flex-shrink-0 text-brand-primary" />
          {!isCollapsed && <span className="text-brand-primary font-bold">AI Assistant</span>}
        </Link>

        <div className="my-2 border-t border-gray-100"></div>

        {/* 9. Customer Support */}
        <Link href="#" className={navItemClass(false)}>
          <HeadphonesIcon className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Support</span>}
        </Link>

        {/* 10. Settings */}
        <Link href="#" className={navItemClass(false)}>
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Settings</span>}
        </Link>

        {/* 11. Language */}
        <Link href="#" className={navItemClass(false)}>
          <Globe className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Language (EN)</span>}
        </Link>

      </div>

      {/* 12. Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className={`w-full flex items-center gap-3 px-3 py-2.5 font-medium rounded-lg text-red-500 hover:bg-red-50 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>

    </aside>
  );
}
