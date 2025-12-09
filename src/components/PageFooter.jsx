import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          QuietSignal
        </p>
        <p className="text-sm">
          &copy; {currentYear} AuroraMinds. All rights reserved.
        </p>
        <div className="mt-2">
          <a
            href="mailto:contact@auroraminds.com"
            className="text-blue-400 hover:underline mx-2"
          >
            Contact
          </a>
          <a
            href="https://twitter.com/"
            className="text-blue-400 hover:underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/"
            className="text-blue-400 hover:underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
