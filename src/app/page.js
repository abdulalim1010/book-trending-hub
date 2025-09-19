import Image from "next/image";
import Link from "next/link";
import InfoCards from "./components/InfoCards";
import Featured from "./components/Featured";
import TopRatedBooks from "./components/TopRatedBooks";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-screen w-full flex items-center">
        {/* Background Image */}
        <Image
          src="/herrro.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Editor's Choice: Best Books Up to 50% Off
            </h1>
            <p className="text-xl sm:text-2xl font-semibold">
              Your Next Favorite Book Is Just a Click Away
            </p>
            <p className="text-gray-200">
              Sed ac arcu sed felis vulputate molestie. Nullam at urna in velit finibus vestibulum euismod.
              Sed quis aliquam leo. Duis iaculis lorem mauris, et convallis dui.
            </p>

            {/* Buttons with sliding orange hover */}
            <div className="flex space-x-4 mt-4">
              <Link
                href="/shop"
                className="relative group overflow-hidden px-6 py-3 rounded-4xl font-semibold text-white bg-indigo-600"
              >
                <span className="absolute inset-0 bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span className="relative z-10">Shop Now</span>
              </Link>

              <Link
                href="/books"
                className="relative group overflow-hidden px-6 py-3 rounded-4xl font-semibold text-white border border-white"
              >
                <span className="absolute inset-0 bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-800"></span>
                <span className="relative z-10">View All Books</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* featcers */}
      <Featured/>
      {/* top rated */}
      <TopRatedBooks/>
      {/* Info Cards Section */}
      <InfoCards />
    </div>
  );
}
