import { ChevronLeft, MapPin, Package, Phone, MessageSquare, Download, AlertCircle, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function OrderDetails() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-background pb-24">

      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link href="/orders" className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="font-bold text-gray-900 text-lg leading-tight">Order Details</h1>
          <p className="text-xs text-gray-500">#ORD-10236 • 06 July 2026, 10:25 AM</p>
        </div>
      </div>

      <div className="px-4 md:px-8 py-4 space-y-6">

        {/* Order Progress / Timeline */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">Order Progress</h2>
          <div className="relative pl-6 space-y-6 border-l-2 border-brand-primary/30">

            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 bg-brand-primary rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-gray-900 text-sm">Order Confirmed</h3>
              <p className="text-xs text-gray-500">06 July, 10:25 AM</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 bg-brand-primary rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-gray-900 text-sm">Preparing</h3>
              <p className="text-xs text-gray-500">06 July, 10:30 AM</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-[0_0_0_2px_rgba(59,130,246,0.3)]"></div>
              <h3 className="font-bold text-blue-600 text-sm">Out for Delivery</h3>
              <p className="text-xs text-gray-500">06 July, 10:55 AM</p>
            </div>

            <div className="relative opacity-40">
              <div className="absolute -left-[31px] top-1 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-gray-900 text-sm">Delivered</h3>
              <p className="text-xs text-gray-500">Estimated 11:15 AM</p>
            </div>

          </div>
        </div>

        {/* Delivery Action */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
          <h2 className="font-bold text-gray-900 text-sm">Need it faster?</h2>
          <button className="w-full py-3 bg-brand-primary/10 text-brand-primary font-bold rounded-xl hover:bg-brand-primary/20 transition-colors">
            Request Priority Delivery
          </button>
        </div>

        {/* Ordered Products */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">Ordered Products (3)</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm">Premium Oat Milk 1L</h3>
                  <p className="text-xs text-gray-500 mb-1">Variant: Original</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">Qty: 1</span>
                    <span className="font-bold text-brand-primary">৳350</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">Payment Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">৳1050</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Charge</span>
              <span className="font-semibold text-gray-900">৳60</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Coupon Discount</span>
              <span className="font-semibold">-৳50</span>
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-between">
              <span className="font-bold text-gray-900">Total Payable</span>
              <span className="font-bold text-xl text-brand-primary">৳1060</span>
            </div>
            <div className="mt-2 bg-gray-50 p-2.5 rounded-lg text-xs font-semibold text-gray-700 text-center border border-gray-200">
              Paid via bKash
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-4">Delivery Information</h2>
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-gray-100 rounded-full text-brand-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Home Address</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                House 12, Road 4, Block C, Banani<br />Dhaka, Bangladesh
              </p>
              <p className="text-sm font-semibold text-gray-800">Receiver: Rifat</p>
              <p className="text-sm text-gray-600">+880 1712-345678</p>
            </div>
          </div>
        </div>

        {/* Change Request */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
          <div className="inline-flex p-3 bg-red-50 text-red-500 rounded-full mb-3">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="font-bold text-gray-900 text-sm mb-2">Order Cannot Be Modified</h2>
          <p className="text-xs text-gray-500">
            This order can no longer be modified because it has already entered the delivery stage.
          </p>
        </div>

        {/* Support Section */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 hover:text-brand-primary transition-colors">
            <Phone className="w-5 h-5" />
            <span className="text-xs font-semibold">Call Store</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 hover:text-brand-primary transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs font-semibold">Chat Support</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 hover:text-brand-primary transition-colors">
            <Download className="w-5 h-5" />
            <span className="text-xs font-semibold">Invoice</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 hover:text-brand-primary transition-colors">
            <RefreshCcw className="w-5 h-5" />
            <span className="text-xs font-semibold">Reorder</span>
          </button>
        </div>

      </div>
    </div>
  );
}
