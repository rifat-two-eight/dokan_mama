"use client";

import { Home, LayoutGrid, Package, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home, isActive: pathname === "/" || pathname === "/pharmacy" || pathname === "/restaurant" },
    { name: "Category", href: "/category", icon: LayoutGrid, isActive: pathname.startsWith("/category") },
    { name: "Orders", href: "/orders", icon: Package, isActive: pathname.startsWith("/orders") },
    { name: "Saved", href: "/saved", icon: Heart, isActive: pathname.startsWith("/saved") },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full relative transition-colors ${
              item.isActive ? "text-brand-primary" : "text-gray-400 hover:text-brand-primary"
            }`}
          >
            <item.icon className={`w-6 h-6 mb-1 ${item.isActive ? 'fill-brand-primary/10' : ''}`} />
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
