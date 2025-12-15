 "use client";
import React, { useEffect } from "react";
import RequestForCallback from "components/request-for-callback";

export default function AppointmentModal({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Book Appointment</h2>
            <p className="text-sm text-gray-600">
              Share your details and we will call you back to confirm.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close appointment form"
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        <div className="px-6 py-5">
          <RequestForCallback
            src="Navbar Modal"
            cta="Book Appointment"
            url="https://api.haplivdentalclinic.com/appointments"
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
}

