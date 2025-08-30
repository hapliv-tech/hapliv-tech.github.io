"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaTimes, FaPhone, FaEnvelope, FaRobot, FaComments, FaClock, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const styles = `
@keyframes pcw-fade-in { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } }
@keyframes pcw-slide-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
`;

function formatTime(date = new Date()) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ProactiveContactWidget(props) {
  const {
    whatsappNumber = "919810471255",
    whatsappMessage = "Hi! I'm interested in your services.",
    phoneNumber = "+91 98104 71255",
    email = "hello@example.com",
    chatbotHref = "#chatbot",
    agentName = "Bob",
    agentTitle = "Manager",
    avatarUrl = "https://i.pravatar.cc/100?img=12",
    greeting = "Hi 👋 I'm your assistant from Hapliv Dental Clinic. How can I help today?",
 
    idleDelayMs = 15000,
    idleThresholdMs = 10000,
    position = "right",
    zIndex = 50,
    suppressDays = 7,
  } = props;

  const brandFrom = "#5A09A4";
  const brandTo = "#5A09A490";
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [lastActive, setLastActive] = useState(Date.now());
  const [waHref, setWaHref] = useState("");
  const idleTimer = useRef(null);
  const pageTimer = useRef(null);

  useEffect(() => {
    setMounted(true);
    setWaHref(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`);
  }, [whatsappNumber, whatsappMessage]);

  useEffect(() => {
    if (!mounted) return;
    try {
      const until = localStorage.getItem("pcw_suppress_until");
      if (until && Date.now() < Number(until)) return;
    } catch {}

    pageTimer.current = setTimeout(() => setEligible(true), idleDelayMs);

    const bump = () => setLastActive(Date.now());
    ["mousemove", "scroll", "keydown", "touchstart"].forEach((e) =>
      window.addEventListener(e, bump, { passive: true })
    );

    return () => {
      clearTimeout(pageTimer.current);
      ["mousemove", "scroll", "keydown", "touchstart"].forEach((e) =>
        window.removeEventListener(e, bump)
      );
    };
  }, [mounted, idleDelayMs]);

  useEffect(() => {
    if (!eligible) return;
    const tick = () => {
      const idleFor = Date.now() - lastActive;
      if (idleFor >= idleThresholdMs) {
        setOpen(true);
        clearInterval(idleTimer.current);
      }
    };
    idleTimer.current = setInterval(tick, 1000);
    return () => clearInterval(idleTimer.current);
  }, [eligible, lastActive, idleThresholdMs]);

  if (!mounted) return null;

  const sidePos = position === "left" ? "left-4" : "right-4";

  const handleClose = () => {
    setOpen(false);
    try {
      const until = Date.now() + suppressDays * 24 * 60 * 60 * 1000;
      localStorage.setItem("pcw_suppress_until", String(until));
    } catch {}
  };

  const shadow = "shadow-[0_20px_40px_rgba(0,0,0,0.25)]";

  return (
    <div className={`fixed bottom-10 ${sidePos}`} style={{ zIndex }}>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`group ${shadow} flex items-center gap-2 rounded-full px-4 py-4 text-white`}
          style={{ background: `linear-gradient(135deg, ${brandFrom}, ${brandTo})`, animation: "pcw-fade-in .25s ease-out" }}
          aria-label="Open help"
        >
          <div className="grid rounded-full w-7 h-7 bg-white/20 place-items-center">
            <FaComments className="w-4 h-4" />
          </div>
          <span className="hidden font-medium md:block">Need help?</span>
        </button>
      )}

      {open && (
        <div
          className={`w-80 max-w-[85vw] rounded-2xl overflow-hidden bg-white ${shadow} border border-black/5`}
          style={{ animation: "pcw-slide-up .25s ease-out" }}
        >
          <div
            className="relative p-4 text-white"
            style={{ background: `linear-gradient(135deg, ${brandFrom}, ${brandTo})` }}
          >
            <button
              className="absolute p-1 rounded-full right-3 top-3 hover:bg-white/20"
              onClick={handleClose}
              aria-label="Close"
            >
              <FaTimes className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <img
                src={avatarUrl}
                alt={`${agentName} avatar`}
                className="w-10 h-10 rounded-full ring-2 ring-white/40"
              />
              <div>
                <div className="text-sm font-semibold leading-tight">{agentName}</div>
                <div className="text-xs opacity-90">{agentTitle}</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-b from-slate-50 to-white">
            <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
              <FaClock className="w-3.5 h-3.5" />
              <span>{formatTime()}</span>
            </div>

            <div className="flex items-start gap-2">
              <img
                src={avatarUrl}
                alt="agent small avatar"
                className="w-7 h-7 rounded-full mt-0.5"
              />
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-800 max-w-[85%]">
                {greeting}
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-xs font-medium text-slate-600">Start Chat with:</div>
              <div className="flex items-center gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="grid w-10 h-10 rounded-full place-items-center"
                  style={{ background: "#25D366" }}
                  aria-label="Start WhatsApp chat"
                >
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </a>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="grid w-10 h-10 text-white bg-purple-600 rounded-full place-items-center"
                  aria-label="Call us"
                >
                  <FaPhoneAlt className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="grid w-10 h-10 text-white rounded-full place-items-center bg-sky-600"
                  aria-label="Send an email"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
