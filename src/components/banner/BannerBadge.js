"use client";
import React from 'react';

/**
 * Banner badge component for displaying offer labels
 * @param {object} props
 * @param {string} props.type - Badge type: 'limited-time', 'new', 'best-deal', 'ending-soon'
 * @param {string} props.className - Additional CSS classes
 */
export default function BannerBadge({ type, className = '' }) {
  const badges = {
    'limited-time': { 
      label: 'Limited Time', 
      color: 'bg-accent text-white',
      icon: '⏰'
    },
    'new': { 
      label: 'New', 
      color: 'bg-success text-white',
      icon: '✨'
    },
    'best-deal': { 
      label: 'Best Deal', 
      color: 'bg-yellow-500 text-white',
      icon: '⭐'
    },
    'ending-soon': { 
      label: 'Ending Soon', 
      color: 'bg-red-600 text-white animate-pulse',
      icon: '🔥'
    },
    'sponsored': { 
      label: 'Sponsored', 
      color: 'bg-purple-600 text-white',
      icon: '📢'
    },
    'advertisement': { 
      label: 'Ad', 
      color: 'bg-gray-700 text-white',
      icon: '📣'
    },
  };

  const badge = badges[type];
  if (!badge) return null;

  return (
    <span 
      className={`absolute top-20 right-4 z-20 inline-flex items-center px-3 py-1.5 rounded text-sm font-semibold shadow-lg whitespace-nowrap ${badge.color} ${className}`}
      aria-label={badge.label}
    >
      <span className="mr-1">{badge.icon}</span>
      {badge.label}
    </span>
  );
}

