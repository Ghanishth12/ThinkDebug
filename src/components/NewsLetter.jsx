import React from "react";

const Newsletter = () => (
    <section style={{backgroundImage: "/public/newslatter.jpg"}} className="bg-blue-900 text-white py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Join Our Newsletter</h3>
        </div>
        <form className="flex gap-2">
          <input type="email" placeholder="Enter Your Email" className="px-4 py-2 rounded-l-md text-gray-900 focus:outline-none" />
          <button type="submit" className="bg-orange-500 px-4 py-2 rounded-r-md font-semibold hover:bg-orange-600">Subscribe</button>
        </form>
      </div>
    </section>
  );

export default Newsletter;  