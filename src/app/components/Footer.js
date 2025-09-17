"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">📚 Book Hub</h3>
            <p className="text-sm">
              Book Hub is your one-stop destination for books, learning, and knowledge.
              Explore trending collections and discover new reads every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link href="/books" className="hover:text-indigo-400">Books</Link></li>
              <li><Link href="/trending" className="hover:text-indigo-400">Trending</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@bookhub.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +880 123 456 789
              </li>
              <li><Link href="/contact" className="hover:text-indigo-400">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-indigo-400">FAQ</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-indigo-400"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-indigo-400"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-indigo-400"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-indigo-400"><Youtube size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
          © {new Date().getFullYear()} Book Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
