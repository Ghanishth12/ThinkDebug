import React from "react";

const Footer = () => (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-sm">
        <div>
          <div><img src="/logo.png" alt="E-commerce" className="h-8 w-20" /></div>
          <div>69 Selous Ave, Harare, Zimbabwe</div>
          <div>Support: +263 03 0000052</div>
          <div>info@demo.com</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Help Center</div>
          <div>FAQ</div>
          <div>About E-Commerce</div>
          <div>Support Tickets</div>
          <div>Contact Us</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <div>Become A Supplier</div>
          <div>Track Order</div>
          <div>Services & Membership</div>
          <div>Help & Community</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Buy On E-Commerce</div>
          <div>Terms & Conditions</div>
          <div>Privacy & Rules</div>
          <div className="flex gap-2 mt-2">
            <img src="/google-play-badge.png" alt="Google Play" className="h-8" />
            <img src="/app-store-badge.png" alt="App Store" className="h-8" />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-2 border-t">©2021 E-Commerce All Rights Reserved</div>
    </footer>
  );

export default Footer;