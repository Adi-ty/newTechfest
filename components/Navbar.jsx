import Link from "next/link";
import styles from "../styles";

const Navbar = () => (
  <nav className={`${styles.xPaddings} py-8 relative animate-navbar`}>
    <div className="gradient-02" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-2xl font-bold">
            {/* ElySian23 */}
            <img src="/logo-bg.png" className="h-[85px] w-[85px]" alt="" />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            <Link
              href="/events"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium"
            >
              Events
            </Link>
            <Link
              href="/hackathon"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium"
            >
              hackEDCode
            </Link>
            <Link
              href="/team"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium z-20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
