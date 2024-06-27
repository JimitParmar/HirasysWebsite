import Link from "next/link";

export default function Footer() {

    return(
        <footer className="w-screen bg-black dark:bg-white text-white dark:text-black flex items-center justify-center py-3">
        <div className="container mx-auto pt-12 px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">About Us</h4>
            <p className="text-gray-400 text-sm max-w-[250px] text-justify">
            Hirasys is an innovative, streamlined recruitment and onboarding platform designed to transform the way companies manage their hiring processes. 
            It offers a comprehensive suite of tools to ensure a smooth onboarding experience for new hires.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/" className="hover:text-white">Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-white">Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                Reach out to CEO
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                Privacy Policy
                </Link>
              </li><li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Resources</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/" className="hover:text-white">Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">Tutorials
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-white">Forum
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">What's new
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Contact Us</h4>
            <p className="text-gray-400">Email: jimit.hirasys@gmail.com</p>
            <p className="text-gray-400">Phone: (+91) 90044-06410</p>
            <p className="text-gray-400">Address: Mumbai, India</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Hirasys. All rights reserved.
        </div>
      </div>
        </footer>
    );
}