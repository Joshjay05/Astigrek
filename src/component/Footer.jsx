// import React from "react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg text-black py-6 border-t-2 border-teal-300"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-sm mb-4">
          Email: informacija@vaikudienoscentras.org | Phone: 37068265969
        </p>
        <div className="text-center mb-4">
          <p className="text-sm">
            © {new Date().getFullYear()} vaikudienoscentras.org. All rights
            reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
