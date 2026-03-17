"use client";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaCopy } from 'react-icons/fa';
import { useState } from 'react';

export function ShareButton({ platform, url, title }) {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const icons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    whatsapp: FaWhatsapp,
    linkedin: FaLinkedin,
  };

  const Icon = icons[platform];

  return (
    <a
      href={shareUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
      aria-label={`Share on ${platform}`}
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

export function CopyLinkButton({ url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
      aria-label="Copy link"
      title={copied ? 'Copied!' : 'Copy link'}
    >
      {copied ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <FaCopy className="w-4 h-4" />
      )}
    </button>
  );
}

