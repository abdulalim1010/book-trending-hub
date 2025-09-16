import { RefreshCcw, CreditCard, Headphones, Tag } from "lucide-react";

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
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-500">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
