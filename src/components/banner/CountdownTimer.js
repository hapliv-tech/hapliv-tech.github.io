"use client";
import React, { useState, useEffect } from 'react';

/**
 * Countdown timer component for time-limited offers
 * @param {object} props
 * @param {string} props.endDate - ISO date string for end date
 * @param {string} props.className - Additional CSS classes
 */
export default function CountdownTimer({ endDate, className = '' }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!endDate) return;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(endDate).getTime();
      const difference = end - now;

      if (difference <= 0) {
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (!timeLeft) return null;

  // Compact mode for smaller banners
  const isCompact = className.includes('compact') || className.includes('text-xs');
  
  if (isCompact) {
    // Compact inline format: "2d 5h 30m"
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white">
          {timeLeft.days > 0 ? `${timeLeft.days}d` : ''}
        </span>
        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white">
          {timeLeft.hours}h
        </span>
        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white">
          {timeLeft.minutes}m
        </span>
      </div>
    );
  }

  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-center min-w-[60px]">
        <div className="text-2xl md:text-3xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-xs text-white/90">Days</div>
      </div>
      <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-center min-w-[60px]">
        <div className="text-2xl md:text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs text-white/90">Hours</div>
      </div>
      <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg text-center min-w-[60px]">
        <div className="text-2xl md:text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs text-white/90">Mins</div>
      </div>
    </div>
  );
}

