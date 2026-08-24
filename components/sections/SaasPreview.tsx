"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { products } from "@/lib/constants";
import { themeFor } from "@/components/ui/productTheme";

/* ── OrderDesk Phone Mockups ── */
function OrderDeskPhones() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 py-6 bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-50 dark:from-emerald-500/10 dark:via-gray-900 dark:to-gray-900 rounded-2xl px-2 sm:px-4 overflow-x-auto">
      {/* Phone 1: Outlet Dashboard */}
      <div className="w-[100px] sm:w-[120px] md:w-[150px] flex-shrink-0" style={{ transform: "rotate(-5deg)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-emerald-600 h-6 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">Live Outlet</span>
          </div>
          <div className="p-2.5 space-y-2">
            <div className="text-[8px] font-bold text-black dark:text-white">Today</div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-emerald-500/10 rounded-lg p-1.5 text-center">
                <div className="text-emerald-600 font-black text-sm">₹42K</div>
                <div className="text-[6px] text-gray-500">Sales</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-1.5 text-center">
                <div className="text-amber-600 font-black text-sm">86</div>
                <div className="text-[6px] text-gray-500">Orders</div>
              </div>
              <div className="bg-orange-500/10 rounded-lg p-1.5 text-center">
                <div className="text-orange-500 font-black text-sm">18</div>
                <div className="text-[6px] text-gray-500">Tables</div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-500/20 rounded-lg p-1.5 text-center">
                <div className="text-purple-600 font-black text-sm">₹489</div>
                <div className="text-[6px] text-gray-500">Avg Bill</div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-1.5">
              <div className="text-[7px] font-semibold text-black dark:text-white mb-1">Hourly Sales</div>
              <div className="flex items-end gap-0.5 h-6">
                <div className="bg-emerald-500/30 rounded-sm flex-1" style={{ height: "30%" }} />
                <div className="bg-emerald-500/40 rounded-sm flex-1" style={{ height: "55%" }} />
                <div className="bg-emerald-500/50 rounded-sm flex-1" style={{ height: "70%" }} />
                <div className="bg-emerald-500/60 rounded-sm flex-1" style={{ height: "85%" }} />
                <div className="bg-emerald-500 rounded-sm flex-1" style={{ height: "100%" }} />
                <div className="bg-emerald-500/70 rounded-sm flex-1" style={{ height: "75%" }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-emerald-500/20 rounded-full" />
                <div className="text-[6px] text-gray-600 dark:text-gray-400">T-07 paid ₹620 · UPI</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-amber-500/20 rounded-full" />
                <div className="text-[6px] text-gray-600 dark:text-gray-400">T-12 new order</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 h-5 flex items-center justify-center gap-3">
            <div className="w-3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Phone 2: Guest QR Menu (center, larger) */}
      <div className="w-[110px] sm:w-[135px] md:w-[170px] flex-shrink-0 relative z-10" style={{ transform: "translateY(-8px)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-emerald-600 h-7 flex items-center justify-center gap-2">
            <span className="text-white text-[7px]">OrderDesk</span>
            <span className="text-white/60 text-[7px]">|</span>
            <span className="text-white text-[7px] font-bold">Table 07</span>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-[9px] font-bold text-black dark:text-white">Urban Spice Café</div>
              <div className="text-[7px] text-emerald-600 font-medium">Open</div>
            </div>
            {/* Menu Item 1 */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="text-[8px] font-bold text-black dark:text-white">Paneer Tikka</div>
                <span className="text-[6px] bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-full">Veg</span>
              </div>
              <div className="text-[7px] text-gray-500">Smoky, mint chutney · ₹260</div>
              <div className="flex items-center justify-between mt-0.5">
                <div className="text-[6px] text-gray-400">★ 4.8 · Bestseller</div>
                <div className="text-[7px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-md font-bold">ADD</div>
              </div>
            </div>
            {/* Menu Item 2 */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="text-[8px] font-bold text-black dark:text-white">Butter Chicken</div>
                <span className="text-[6px] bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">Non-Veg</span>
              </div>
              <div className="text-[7px] text-gray-500">Half · Full · ₹320</div>
              <div className="flex items-center justify-between mt-0.5">
                <div className="text-[6px] text-gray-400">★ 4.9 · Chef pick</div>
                <div className="flex items-center gap-1 text-[7px] font-bold">
                  <span className="w-3 h-3 bg-emerald-600 text-white rounded flex items-center justify-center">−</span>
                  <span className="text-black dark:text-white">2</span>
                  <span className="w-3 h-3 bg-emerald-600 text-white rounded flex items-center justify-center">+</span>
                </div>
              </div>
            </div>
            {/* Menu Item 3 */}
            <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="text-[8px] font-bold text-black dark:text-white">Masala Chai</div>
                <span className="text-[6px] bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded-full">₹60</span>
              </div>
              <div className="text-[7px] text-gray-500">Cutting · Regular · Pot</div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="text-[6px] text-gray-400">Adrak, elaichi, kullhad</div>
              </div>
            </div>
          </div>
          <div className="bg-emerald-600 h-6 flex items-center justify-center gap-2">
            <span className="text-white text-[7px] font-bold">View Cart</span>
            <span className="text-white/80 text-[7px]">·</span>
            <span className="text-white text-[7px] font-bold">₹640</span>
          </div>
        </div>
      </div>

      {/* Phone 3: Live KOT / Captain */}
      <div className="w-[100px] sm:w-[120px] md:w-[150px] flex-shrink-0" style={{ transform: "rotate(5deg)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-emerald-600 h-6 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">Live KOT</span>
          </div>
          <div className="p-2.5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 text-[8px] font-bold">T07</span>
              </div>
              <div>
                <div className="text-[8px] font-bold text-black dark:text-white">Order #OD-1284</div>
                <div className="text-[6px] text-gray-400">Captain: Ravi</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 text-center">
                <div className="text-[6px] text-gray-400">Items</div>
                <div className="text-[8px] font-bold text-black dark:text-white">5</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 text-center">
                <div className="text-[6px] text-gray-400">Total</div>
                <div className="text-[8px] font-bold text-emerald-600">₹640</div>
              </div>
            </div>
            <div className="text-[7px] font-semibold text-black dark:text-white">Kitchen Queue</div>
            <div className="space-y-1">
              <div className="bg-emerald-500/5 rounded p-1.5 flex items-center justify-between">
                <div>
                  <div className="text-[6px] font-medium text-black dark:text-white">Paneer Tikka × 1</div>
                  <div className="text-[5px] text-gray-400">Less spicy</div>
                </div>
                <span className="text-[5px] bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-1 py-0.5 rounded-full">Ready</span>
              </div>
              <div className="bg-amber-500/5 rounded p-1.5 flex items-center justify-between">
                <div>
                  <div className="text-[6px] font-medium text-black dark:text-white">Butter Chicken × 2</div>
                  <div className="text-[5px] text-gray-400">Full · extra gravy</div>
                </div>
                <span className="text-[5px] bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1 py-0.5 rounded-full">Cooking</span>
              </div>
              <div className="bg-orange-500/5 rounded p-1.5 flex items-center justify-between">
                <div>
                  <div className="text-[6px] font-medium text-black dark:text-white">Masala Chai × 2</div>
                  <div className="text-[5px] text-gray-400">Kullhad</div>
                </div>
                <span className="text-[5px] bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 px-1 py-0.5 rounded-full">New</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 h-5 flex items-center justify-center gap-3">
            <div className="w-3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── VisitorDesk Phone Mockups ── */
function VisitorDeskPhones() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 py-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-500/10 dark:via-gray-900 dark:to-gray-900 rounded-2xl px-2 sm:px-4 overflow-x-auto">
      {/* Phone 1: Quick Check-In */}
      <div className="w-[100px] sm:w-[120px] md:w-[150px] flex-shrink-0" style={{ transform: "rotate(-5deg)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-slate-900 h-6 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">Quick Check-In</span>
          </div>
          <div className="p-2.5 space-y-2">
            <div className="text-[8px] font-bold text-black dark:text-white">Scan & Enter</div>
            {/* QR Code mockup */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2 flex flex-col items-center">
              <div className="w-14 h-14 bg-white dark:bg-gray-600 border-2 border-slate-900/20 dark:border-gray-500 rounded-lg p-1 grid grid-cols-5 grid-rows-5 gap-px mb-1">
                {[1,1,1,0,1, 1,0,1,1,0, 0,1,0,1,1, 1,0,1,0,1, 1,1,0,1,0].map((filled, i) => (
                  <div key={i} className={filled ? "bg-slate-900 dark:bg-white rounded-sm" : "bg-white dark:bg-gray-600"} />
                ))}
              </div>
              <div className="text-[6px] text-gray-400">Scan to Check-In</div>
            </div>
            <div className="bg-emerald-500/10 rounded-lg p-1.5 text-center">
              <div className="text-[7px] font-bold text-emerald-500">Tap to Scan ID</div>
            </div>
            <div className="space-y-1">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-[5px] text-emerald-500">&#10003;</span>
                </div>
                <div className="text-[6px] text-gray-600 dark:text-gray-400">Photo Capture</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <span className="text-[5px] text-primary-600">&#10003;</span>
                </div>
                <div className="text-[6px] text-gray-600 dark:text-gray-400">NDA Signature</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 h-5 flex items-center justify-center gap-3">
            <div className="w-3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Phone 2: Live Dashboard (center, larger) */}
      <div className="w-[110px] sm:w-[135px] md:w-[170px] flex-shrink-0 relative z-10" style={{ transform: "translateY(-8px)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-slate-900 h-7 flex items-center justify-center gap-2">
            <span className="text-white text-[7px]">VisitorDesk</span>
            <span className="text-white/60 text-[7px]">|</span>
            <span className="text-white text-[7px] font-bold">Live Dashboard</span>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-[9px] font-bold text-black dark:text-white">Today&apos;s Visitors</div>
              <div className="text-[7px] text-emerald-500 font-bold">47 Active</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-emerald-500/10 rounded-lg p-1 text-center">
                <div className="text-emerald-500 font-black text-[10px]">128</div>
                <div className="text-[5px] text-gray-500">Total</div>
              </div>
              <div className="bg-primary-500/10 rounded-lg p-1 text-center">
                <div className="text-primary-600 font-black text-[10px]">47</div>
                <div className="text-[5px] text-gray-500">In</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-1 text-center">
                <div className="text-amber-500 font-black text-[10px]">81</div>
                <div className="text-[5px] text-gray-500">Out</div>
              </div>
            </div>
            {/* Visitor 1 */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-[5px] font-bold text-emerald-600">RK</span>
                  </div>
                  <div className="text-[7px] font-bold text-black dark:text-white">Rajesh Kumar</div>
                </div>
                <span className="text-[5px] bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-1 py-0.5 rounded-full">IN</span>
              </div>
              <div className="text-[6px] text-gray-400">Host: Amit Shah &middot; Floor 5 &middot; 10:15 AM</div>
            </div>
            {/* Visitor 2 */}
            <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-blue-200 dark:bg-blue-500/30 rounded-full flex items-center justify-center">
                    <span className="text-[5px] font-bold text-blue-700">SP</span>
                  </div>
                  <div className="text-[7px] font-bold text-black dark:text-white">Sunita Patel</div>
                </div>
                <span className="text-[5px] bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-1 py-0.5 rounded-full">IN</span>
              </div>
              <div className="text-[6px] text-gray-400">Host: Neha Joshi &middot; Floor 3 &middot; 10:42 AM</div>
            </div>
            {/* Visitor 3 */}
            <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-[5px] font-bold text-gray-600 dark:text-gray-400">MV</span>
                  </div>
                  <div className="text-[7px] font-bold text-black dark:text-white">Manoj Verma</div>
                </div>
                <span className="text-[5px] bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 px-1 py-0.5 rounded-full">OUT</span>
              </div>
              <div className="text-[6px] text-gray-400">Host: Ravi Mehta &middot; Floor 2 &middot; 9:30 AM</div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 h-6 flex items-center justify-center gap-4">
            <svg className="w-3 h-3 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          </div>
        </div>
      </div>

      {/* Phone 3: Visitor Badge */}
      <div className="w-[100px] sm:w-[120px] md:w-[150px] flex-shrink-0" style={{ transform: "rotate(5deg)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-slate-900 h-6 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">Visitor Badge</span>
          </div>
          <div className="p-2.5 space-y-2">
            <div className="bg-gradient-to-b from-slate-900/5 to-primary-500/5 dark:from-slate-100/5 dark:to-primary-500/10 rounded-lg p-2 border border-gray-200 dark:border-gray-600 text-center">
              <div className="w-10 h-10 bg-primary-500/10 rounded-full mx-auto mb-1 flex items-center justify-center">
                <span className="text-primary-600 text-sm font-black">RK</span>
              </div>
              <div className="text-[8px] font-bold text-black dark:text-white">Rajesh Kumar</div>
              <div className="text-[6px] text-gray-400">TechCorp Pvt. Ltd.</div>
              <div className="w-full h-px bg-gray-200 dark:bg-gray-600 my-1" />
              <div className="flex justify-between text-[5px] text-gray-400">
                <span>Floor: 5</span>
                <span>Badge: V-0472</span>
              </div>
            </div>
            <div className="text-[7px] font-semibold text-black dark:text-white">Access Details</div>
            <div className="space-y-1">
              <div className="bg-emerald-500/5 rounded p-1.5 flex items-center justify-between">
                <div className="text-[6px] font-medium text-black dark:text-white">Host</div>
                <div className="text-[6px] text-gray-500">Amit Shah</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-500/10 rounded p-1.5 flex items-center justify-between">
                <div className="text-[6px] font-medium text-black dark:text-white">Purpose</div>
                <div className="text-[6px] text-gray-500">Business Meeting</div>
              </div>
              <div className="bg-amber-500/5 rounded p-1.5 flex items-center justify-between">
                <div className="text-[6px] font-medium text-black dark:text-white">Valid Till</div>
                <div className="text-[6px] text-gray-500">05:00 PM</div>
              </div>
            </div>
            <div className="bg-emerald-500 rounded-md p-1 text-center">
              <div className="text-[6px] font-bold text-white">CHECKED IN - 10:15 AM</div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 h-5 flex items-center justify-center gap-3">
            <div className="w-3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── TrackDesk Laptop + Phone Mockups ── */
function TrackDeskScreens() {
  const activity = [
    { app: "VS Code", pct: 42, tone: "bg-violet-500" },
    { app: "Chrome", pct: 28, tone: "bg-sky-500" },
    { app: "Slack", pct: 18, tone: "bg-emerald-500" },
    { app: "Idle", pct: 12, tone: "bg-gray-300 dark:bg-gray-600" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 py-6 bg-gradient-to-br from-violet-50 via-indigo-50 to-sky-50 dark:from-violet-500/10 dark:via-gray-900 dark:to-gray-900 rounded-2xl px-2 sm:px-4 overflow-x-auto">
      {/* Phone: Task Assignment */}
      <div className="w-[100px] sm:w-[120px] md:w-[140px] flex-shrink-0" style={{ transform: "rotate(-5deg)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-slate-900 h-6 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">My Tasks</span>
          </div>
          <div className="p-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-[8px] font-bold text-black dark:text-white">Assigned</div>
              <div className="text-[6px] text-violet-500 font-bold">4 open</div>
            </div>
            <div className="bg-violet-500/5 border border-violet-500/20 rounded-lg p-1.5 space-y-1">
              <div className="text-[7px] font-bold text-black dark:text-white">API integration</div>
              <div className="flex items-center justify-between">
                <span className="text-[5px] bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 px-1 py-0.5 rounded-full">Today</span>
                <span className="text-[5px] text-gray-400">Ankit R.</span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg p-1.5 space-y-1">
              <div className="text-[7px] font-bold text-black dark:text-white">QA regression</div>
              <div className="flex items-center justify-between">
                <span className="text-[5px] bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1 py-0.5 rounded-full">Tomorrow</span>
                <span className="text-[5px] text-gray-400">Priya S.</span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg p-1.5 space-y-1">
              <div className="text-[7px] font-bold text-black dark:text-white">Deploy staging</div>
              <div className="flex items-center justify-between">
                <span className="text-[5px] bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-1 py-0.5 rounded-full">Done</span>
                <span className="text-[5px] text-gray-400">Manoj V.</span>
              </div>
            </div>
            <div className="bg-violet-500/10 rounded-lg p-1.5 text-center">
              <div className="text-[7px] font-bold text-violet-500">+ Assign Task</div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 h-5 flex items-center justify-center gap-3">
            <div className="w-3 h-0.5 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Laptop: Activity Monitor */}
      <div className="w-[170px] sm:w-[210px] md:w-[250px] flex-shrink-0 relative z-10" style={{ transform: "translateY(-6px)" }}>
        {/* Screen */}
        <div className="bg-slate-900 rounded-t-[10px] p-[5px] shadow-2xl">
          <div className="bg-white dark:bg-gray-800 rounded-[5px] overflow-hidden">
            {/* Title bar */}
            <div className="bg-slate-900 h-5 flex items-center px-2 gap-1">
              <div className="w-1 h-1 rounded-full bg-red-400" />
              <div className="w-1 h-1 rounded-full bg-amber-400" />
              <div className="w-1 h-1 rounded-full bg-emerald-400" />
              <span className="text-white text-[6px] font-bold ml-1.5">TrackDesk</span>
              <span className="text-white/50 text-[6px]">|</span>
              <span className="text-white text-[6px]">Activity Monitor</span>
              <span className="ml-auto flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-[5px] font-bold">LIVE</span>
              </span>
            </div>

            <div className="p-2 space-y-1.5">
              {/* Stat row */}
              <div className="grid grid-cols-4 gap-1">
                <div className="bg-violet-500/10 rounded p-1 text-center">
                  <div className="text-violet-500 font-black text-[9px]">24</div>
                  <div className="text-[4px] text-gray-500">Online</div>
                </div>
                <div className="bg-emerald-500/10 rounded p-1 text-center">
                  <div className="text-emerald-500 font-black text-[9px]">86%</div>
                  <div className="text-[4px] text-gray-500">Productive</div>
                </div>
                <div className="bg-amber-500/10 rounded p-1 text-center">
                  <div className="text-amber-500 font-black text-[9px]">7h 12m</div>
                  <div className="text-[4px] text-gray-500">Avg Hours</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700/50 rounded p-1 text-center">
                  <div className="text-gray-600 dark:text-gray-300 font-black text-[9px]">38m</div>
                  <div className="text-[4px] text-gray-500">Idle</div>
                </div>
              </div>

              {/* App usage bars */}
              <div className="bg-gray-50 dark:bg-gray-700/40 rounded p-1.5 space-y-1">
                <div className="text-[6px] font-bold text-black dark:text-white">App &amp; Website Usage</div>
                {activity.map((a) => (
                  <div key={a.app} className="flex items-center gap-1">
                    <div className="text-[5px] text-gray-500 w-9 flex-shrink-0">{a.app}</div>
                    <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${a.tone}`} style={{ width: `${a.pct}%` }} />
                    </div>
                    <div className="text-[5px] text-gray-400 w-4 text-right flex-shrink-0">{a.pct}%</div>
                  </div>
                ))}
              </div>

              {/* Employee rows */}
              <div className="space-y-1">
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded p-1 flex items-center gap-1">
                  <div className="w-3.5 h-3.5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[4px] font-bold text-emerald-600">AR</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[6px] font-bold text-black dark:text-white truncate">Ankit Rawat</div>
                    <div className="text-[5px] text-gray-400 truncate">VS Code &middot; 3 tasks active</div>
                  </div>
                  <span className="ml-auto text-[4px] bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-1 py-0.5 rounded-full flex-shrink-0">ACTIVE</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded p-1 flex items-center gap-1">
                  <div className="w-3.5 h-3.5 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[4px] font-bold text-violet-600">PS</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[6px] font-bold text-black dark:text-white truncate">Priya Sharma</div>
                    <div className="text-[5px] text-gray-400 truncate">Figma &middot; 1 task overdue</div>
                  </div>
                  <span className="ml-auto text-[4px] bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1 py-0.5 rounded-full flex-shrink-0">IDLE 6m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="h-1.5 bg-slate-700 rounded-b-[10px]" />
        <div className="h-1 w-[55%] mx-auto bg-slate-800 rounded-b-[6px] shadow-lg" />
      </div>
    </div>
  );
}

const phoneMockups: Record<string, React.ReactNode> = {
  VisitorDesk: <VisitorDeskPhones />,
  OrderDesk: <OrderDeskPhones />,
  TrackDesk: <TrackDeskScreens />,
};

export default function SaasPreview() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />

      <Container>
        <SectionHeading
          label="Our Products"
          title="SaaS Solutions Built to Scale"
          description="Production-ready platforms designed for modern businesses. Multi-tenant, secure, and cloud-native."
        />

        <div className="space-y-12">
          {products.map((product, index) => {
            const theme = themeFor(product.color);
            return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Accent Glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 ${theme.glow}`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Product Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${theme.badge}`}
                    >
                      {product.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">SaaS Platform</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.fullName}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2 font-medium">
                    {product.tagline}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {product.features.slice(0, 6).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <svg
                          className={`w-4 h-4 flex-shrink-0 ${theme.icon}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    href="/saas-solutions"
                    variant={theme.buttonVariant}
                    size="sm"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Button>
                </div>

                {/* Phone Mockups */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  {phoneMockups[product.name]}
                </motion.div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
