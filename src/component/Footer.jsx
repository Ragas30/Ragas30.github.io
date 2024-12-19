export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm md:text-base">
              &copy; {"It's"} All Belong to{" "}
              <a href="https://www.instagram.com/ralgaluh_/" className="hover:underline hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                R30 Page
              </a>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/ralgaluh_/" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.014-4.947.072-1.418.065-2.703.377-3.737 1.411-1.034 1.034-1.346 2.319-1.411 3.737-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.065 1.418.377 2.703 1.411 3.737 1.034 1.034 2.319 1.346 3.737 1.411 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.418-.065 2.703-.377 3.737-1.411 1.034-1.034 1.346-2.319 1.411-3.737.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.065-1.418-.377-2.703-1.411-3.737-1.034-1.034-2.319-1.346-3.737-1.411-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.407 0-6.162 2.755-6.162 6.162s2.755 6.162 6.162 6.162 6.162-2.755 6.162-6.162-2.755-6.162-6.162-6.162zm0 10.162c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
