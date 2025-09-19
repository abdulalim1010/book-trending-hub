"use client";

import { RefreshCcw, CreditCard, Headphones, Tag } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <RefreshCcw size={32} className="text-indigo-600" />,
    title: "Return & Refund",
    subtitle: "Money back guarantee",
  },
  {
    icon: <CreditCard size={32} className="text-indigo-600" />,
    title: "Secure Payment",
    subtitle: "30% off by subscribing",
  },
  {
    icon: <Headphones size={32} className="text-indigo-600" />,
    title: "Quality Support",
    subtitle: "Always online 24/7",
  },
  {
    icon: <Tag size={32} className="text-indigo-600" />,
    title: "Daily Offers",
    subtitle: "20% off by subscribing",
  },
];

export default function InfoCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-500">{card.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
