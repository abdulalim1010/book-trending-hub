"use client";
import Link from "next/link";
import { Menu, X, ChevronDown, Bell } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            📚 Book Hub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <div className="flex space-x-6 items-center">
              {/** Desktop Dropdown Menu Items */}
              {[
                { name: "Home", links: [{ href: "/home1", label: "Home1" }, { href: "/home2", label: "Home2" }] },
                { name: "Books", links: [{ href: "/books/all", label: "All Books" }, { href: "/books/latest", label: "Latest" }] },
                { name: "Trending", links: [{ href: "/trending/today", label: "Today" }, { href: "/trending/week", label: "This Week" }] },
                { name: "About", links: [{ href: "/about/team", label: "Our Team" }, { href: "/about/mission", label: "Mission" }] },
                { name: "Contact", links: [{ href: "/contact/email", label: "Email" }, { href: "/contact/location", label: "Location" }] },
              ].map((menu) => (
                <div key={menu.name} className="relative group">
                  <button className="flex items-center hover:text-indigo-600">
                    {menu.name}
                    <ChevronDown
                      className="ml-1 transform transition-transform duration-300 group-hover:rotate-180"
                      size={16}
                    />
                  </button>
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                    {menu.links.map((link) => (
                      <Link key={link.href} href={link.href} className="block px-4 py-2 hover:bg-indigo-100">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Notification Icon */}
            <div className="ml-6">
              <button className="relative p-2 text-gray-700 hover:text-indigo-600">
                <Bell size={24} />
                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md overflow-hidden transition-max-h duration-300">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {[
              { name: "Home", links: [{ href: "/home1", label: "Home1" }, { href: "/home2", label: "Home2" }] },
              { name: "Books", links: [{ href: "/books/all", label: "All Books" }, { href: "/books/latest", label: "Latest" }] },
              { name: "Trending", links: [{ href: "/trending/today", label: "Today" }, { href: "/trending/week", label: "This Week" }] },
              { name: "About", links: [{ href: "/about/team", label: "Our Team" }, { href: "/about/mission", label: "Mission" }] },
              { name: "Contact", links: [{ href: "/contact/email", label: "Email" }, { href: "/contact/location", label: "Location" }] },
            ].map((menu) => (
              <details key={menu.name} className="group">
                <summary className="flex justify-between items-center cursor-pointer hover:text-indigo-600">
                  {menu.name}
                </summary>
                <div className="ml-4 mt-2 space-y-1 overflow-hidden max-h-0 group-open:max-h-40 transition-all duration-300">
                  {menu.links.map((link) => (
                    <Link key={link.href} href={link.href} className="block hover:text-indigo-600">{link.label}</Link>
                  ))}
                </div>
              </details>
            ))}

            {/* Mobile Notification Icon */}
            <div className="mt-2">
              <button className="relative p-2 text-gray-700 hover:text-indigo-600">
                <Bell size={24} />
                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
