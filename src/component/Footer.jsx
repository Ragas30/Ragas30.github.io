export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-blue-500 blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-purple-500 blur-xl"></div>
        <div className="absolute bottom-0 left-1/3 w-36 h-36 rounded-full bg-pink-500 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-800 font-bold text-xl">R30</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">R30 Page</h3>
                <p className="text-gray-300 text-sm">Creating since 2023</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Home
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Gallery
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ralgaluh_/" className="transform hover:scale-110 hover:text-pink-400 transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.947.072-1.418.065-2.703.377-3.737 1.411-1.034 1.034-1.346 2.319-1.411 3.737-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.065 1.418.377 2.703 1.411 3.737 1.034 1.034 2.319 1.346 3.737 1.411 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.418-.065 2.703-.377 3.737-1.411 1.034-1.034 1.346-2.319 1.411-3.737.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.065-1.418-.377-2.703-1.411-3.737-1.034-1.034-2.319-1.346-3.737-1.411-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.407 0-6.162 2.755-6.162 6.162s2.755 6.162 6.162 6.162 6.162-2.755 6.162-6.162-2.755-6.162-6.162-6.162zm0 10.162c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
              <a href="#" className="transform hover:scale-110 hover:text-blue-400 transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="transform hover:scale-110 hover:text-red-500 transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} - {"It's"} All Belong to{" "}
            <a href="https://www.instagram.com/ralgaluh_/" className="text-white hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              R30 Page
            </a>
          </p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mr-4 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="mr-4 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
