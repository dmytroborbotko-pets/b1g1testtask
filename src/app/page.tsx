"use client";

import { Suspense, useState } from "react";
import SearchField from "@/app/components/search-field/SearchField";
import ShopList from "@/app/components/shop/shop-list";
import { QRBanner } from "@/app/components/shop/qr-banner";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-[#202020] text-white p-4 rounded-b-2xl">
        <div className="container mx-auto flex justify-between items-center mb-4" >
          <h1 className="text-[22px] font-['Red_Hat_Display'] font-[700]">Shop</h1>
          <button className="text-[16px] font-['Red_Hat_Display'] font-[700] text-white hover:text-gray-300" onClick={() => {}}>
            Sign in
          </button>
        </div>
        <SearchField value={searchQuery} onChange={setSearchQuery} />
      </header>

      <div className="container mx-auto px-4 py-4 space-y-6">
        <QRBanner />
        <Suspense fallback={<div>Loading shops...</div>}>
          <ShopList searchQuery={searchQuery} />
        </Suspense>
      </div>
    </main>
  );
}
