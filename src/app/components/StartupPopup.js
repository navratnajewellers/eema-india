"use client";

// components/StartupPopup.js
import { useEffect, useState } from "react";

export default function StartupPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show the popup after the first render
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">Welcome!</h2>
        <p className="mb-4">This is a popup when the site starts.</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
