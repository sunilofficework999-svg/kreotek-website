"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { products } from "@/lib/constants";

/* ── CareDesk Phone Mockups ── */
function CareDeskPhones() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 py-6 bg-gradient-to-br from-primary-500/5 via-red-50 to-pink-50 dark:from-primary-500/10 dark:via-gray-900 dark:to-gray-900 rounded-2xl px-2 sm:px-4 overflow-x-auto">
      {/* Phone 1: Dashboard */}
      <div className="w-[100px] sm:w-[120px] md:w-[150px] flex-shrink-0" style={{ transform: "rotate(-5deg)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-primary-500 h-6 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">Dashboard</span>
          </div>
          <div className="p-2.5 space-y-2">
            <div className="text-[8px] font-bold text-black dark:text-white">Overview</div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-primary-500/10 rounded-lg p-1.5 text-center">
                <div className="text-primary-600 font-black text-sm">24</div>
                <div className="text-[6px] text-gray-500">Patients</div>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-1.5 text-center">
                <div className="text-emerald-500 font-black text-sm">8</div>
                <div className="text-[6px] text-gray-500">Doctors</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-1.5 text-center">
                <div className="text-amber-500 font-black text-sm">12</div>
                <div className="text-[6px] text-gray-500">Today</div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-500/20 rounded-lg p-1.5 text-center">
                <div className="text-purple-600 font-black text-sm">96%</div>
                <div className="text-[6px] text-gray-500">Uptime</div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-1.5">
              <div className="text-[7px] font-semibold text-black dark:text-white mb-1">Revenue</div>
              <div className="flex items-end gap-0.5 h-6">
                <div className="bg-primary-500/30 rounded-sm flex-1" style={{ height: "40%" }} />
                <div className="bg-primary-500/40 rounded-sm flex-1" style={{ height: "60%" }} />
                <div className="bg-primary-500/50 rounded-sm flex-1" style={{ height: "45%" }} />
                <div className="bg-primary-500/60 rounded-sm flex-1" style={{ height: "80%" }} />
                <div className="bg-primary-500 rounded-sm flex-1" style={{ height: "100%" }} />
                <div className="bg-primary-500/70 rounded-sm flex-1" style={{ height: "70%" }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-primary-500/20 rounded-full" />
                <div className="text-[6px] text-gray-600 dark:text-gray-400">New appointment - 10:30</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 flex items-center gap-1">
                <div className="w-3 h-3 bg-emerald-500/20 rounded-full" />
                <div className="text-[6px] text-gray-600 dark:text-gray-400">Lab results ready</div>
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

      {/* Phone 2: Appointments (center, larger) */}
      <div className="w-[110px] sm:w-[135px] md:w-[170px] flex-shrink-0 relative z-10" style={{ transform: "translateY(-8px)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-primary-500 h-7 flex items-center justify-center gap-2">
            <span className="text-white text-[7px]">CareDesk</span>
            <span className="text-white/60 text-[7px]">|</span>
            <span className="text-white text-[7px] font-bold">Appointments</span>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-[9px] font-bold text-black dark:text-white">Today&apos;s Schedule</div>
              <div className="text-[7px] text-primary-600 font-medium">Feb 20</div>
            </div>
            {/* Appointment 1 */}
            <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="text-[8px] font-bold text-black dark:text-white">Dr. Sharma</div>
                <span className="text-[6px] bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">Active</span>
              </div>
              <div className="text-[7px] text-gray-500">10:00 AM - Cardiology</div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full" />
                <div className="text-[6px] text-gray-400">Rahul Verma</div>
              </div>
            </div>
            {/* Appointment 2 */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="text-[8px] font-bold text-black dark:text-white">Dr. Patel</div>
                <span className="text-[6px] bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded-full">Upcoming</span>
              </div>
              <div className="text-[7px] text-gray-500">11:30 AM - Dermatology</div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full" />
                <div className="text-[6px] text-gray-400">Priya Singh</div>
              </div>
            </div>
            {/* Appointment 3 */}
            <div className="bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 rounded-xl p-2 space-y-1">
              <div className="flex items-center justify-between">
                <div className="text-[8px] font-bold text-black dark:text-white">Dr. Gupta</div>
                <span className="text-[6px] bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded-full">2:00 PM</span>
              </div>
              <div className="text-[7px] text-gray-500">Orthopaedics</div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full" />
                <div className="text-[6px] text-gray-400">Amit Kumar</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 h-6 flex items-center justify-center gap-4">
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </div>
        </div>
      </div>

      {/* Phone 3: Patient Record */}
      <div className="w-[100px] sm:w-[120px] md:w-[150px] flex-shrink-0" style={{ transform: "rotate(5deg)" }}>
        <div className="bg-white dark:bg-gray-800 rounded-[20px] shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-primary-500 h-6 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">Patient Record</span>
          </div>
          <div className="p-2.5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary-500/10 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-[8px] font-bold">RV</span>
              </div>
              <div>
                <div className="text-[8px] font-bold text-black dark:text-white">Rahul Verma</div>
                <div className="text-[6px] text-gray-400">ID: CD-2024-001</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 text-center">
                <div className="text-[6px] text-gray-400">Age</div>
                <div className="text-[8px] font-bold text-black dark:text-white">32</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-1 text-center">
                <div className="text-[6px] text-gray-400">Blood</div>
                <div className="text-[8px] font-bold text-primary-600">B+</div>
              </div>
            </div>
            <div className="text-[7px] font-semibold text-black dark:text-white">Medical History</div>
            <div className="space-y-1">
              <div className="bg-primary-500/5 rounded p-1.5">
                <div className="text-[6px] font-medium text-black dark:text-white">Cardiology Checkup</div>
                <div className="text-[5px] text-gray-400">15 Jan 2024</div>
              </div>
              <div className="bg-emerald-500/5 rounded p-1.5">
                <div className="text-[6px] font-medium text-black dark:text-white">Blood Test - Normal</div>
                <div className="text-[5px] text-gray-400">02 Jan 2024</div>
              </div>
              <div className="bg-amber-500/5 rounded p-1.5">
                <div className="text-[6px] font-medium text-black dark:text-white">General Consultation</div>
                <div className="text-[5px] text-gray-400">20 Dec 2023</div>
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

const phoneMockups: Record<string, React.ReactNode> = {
  VisitorDesk: <VisitorDeskPhones />,
  CareDesk: <CareDeskPhones />,
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
          {products.map((product, index) => (
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
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 ${
                  product.color === "blue" ? "bg-primary-500" : "bg-emerald-500"
                }`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Product Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        product.color === "blue"
                          ? "bg-primary-50 text-primary-600 border border-primary-100"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      }`}
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
                          className={`w-4 h-4 flex-shrink-0 ${
                            product.color === "blue"
                              ? "text-primary-600"
                              : "text-emerald-400"
                          }`}
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
                    variant={product.color === "blue" ? "primary" : "outline"}
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
          ))}
        </div>
      </Container>
    </section>
  );
}
