import React, { useState } from "react";

export default function GlovoBlogPage() {
  const [code, setCode] = useState("");

  function handleComplete() {
    const redirectUrl = "https://omg10.com/4/11127579";
    if (typeof window !== "undefined") {
      window.open(redirectUrl, "_blank");
    }

    const newCode = "Glor91A8YL2B1v0";
    setCode(newCode);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(newCode).catch(() => {});
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-yellow-600 to-emerald-500 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Understanding Glovo Foods
          </h1>
          <p className="mt-4 text-lg md:text-xl text-green-100">
            How on-demand food delivery is transforming modern urban living
          </p>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* INTRO */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <p className="text-lg leading-relaxed">
            In today’s fast-paced world, convenience has become one of the most
            important factors influencing how people choose what to eat.
            Food delivery platforms like <span className="font-semibold text-green-600">Glovo</span>
            {" "}have completely changed how we access food, groceries, and everyday essentials.
          </p>
        </section>

        {/* WHAT IS GLOVO */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is Glovo?</h2>
          <p className="leading-relaxed">
            Glovo is an on-demand delivery platform that allows users to order
            food, groceries, and other essentials from local businesses and have
            them delivered quickly. It connects customers, restaurants, and couriers
            through a simple mobile application.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Download the Glovo app",
              "Set your location",
              "Browse restaurants & shops",
              "Place your order",
              "Track in real-time",
              "Receive delivery at your door"
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full font-bold">
                  {i + 1}
                </span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Why People Use Glovo</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Convenience",
                desc: "Order anything from home or office without moving."
              },
              {
                title: "Variety",
                desc: "Access multiple restaurants and stores in one place."
              },
              {
                title: "Real-Time Tracking",
                desc: "Know exactly where your order is at all times."
              },
              {
                title: "Time Saving",
                desc: "Focus on your life while delivery is handled for you."
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-green-50 border">
                <h3 className="font-semibold text-lg text-green-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Impact on Businesses
          </h2>
          <p className="leading-relaxed">
            Platforms like Glovo have helped restaurants grow by increasing visibility,
            improving delivery systems, and expanding their customer base.
            Small businesses can now compete in the digital economy without building
            their own delivery infrastructure.
          </p>
        </section>

        {/* CHALLENGES */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Challenges</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Delivery fees can increase total cost</li>
            <li>Delays during peak hours</li>
            <li>Limited coverage in some areas</li>
            <li>Higher menu prices compared to in-store</li>
          </ul>
        </section>

        {/* FUTURE */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">The Future of Delivery</h2>
          <p className="leading-relaxed text-gray-200">
            The future of platforms like Glovo is moving toward faster deliveries,
            AI-powered recommendations, and possibly drone-based logistics.
            As technology improves, convenience will continue to increase.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="bg-white shadow-md rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="leading-relaxed">
            Glovo has changed how people access food and essentials by combining
            technology and logistics into one seamless experience. It continues
            to shape modern convenience in urban life.
          </p>

          <button onClick={handleComplete} className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition">
            Complete Article
          </button>

          {code && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-green-800 font-mono inline-block">
                <p>Copy the code Below</p>
              {code}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}