"use client";
import Link from "next/link";
import Dropdown from "./dropdown";
import { usePathname } from "next/navigation";

export default function NavItemApp({ item, textColor = "#000000" }) {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  const isLightTheme = textColor === "#000000" || textColor === "#000";

  // Use theme-appropriate colors
  const activeColor = isLightTheme ? 'text-primary' : 'text-white';
  const hoverColor = isLightTheme ? 'hover:text-primary' : 'hover:text-white/80';
  const defaultColor = isLightTheme ? 'text-gray-700' : 'text-white/90';
  const underlineColor = isLightTheme ? 'bg-primary' : 'bg-white';

  return (
    <>
      <div className="navitem">
        {item.children ? (
          <>
            <Link
              href={item.path}
              target={item.target}
              className={`relative px-4 py-2 mr-2 transition-all duration-300 cursor-pointer focus:outline-none rounded-md ${
                isActive
                  ? `${activeColor} font-semibold`
                  : `${defaultColor} ${hoverColor}`
              }`}
            >
              {item.name}
              {isActive && (
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${underlineColor} rounded-full`} />
              )}
              {!isActive && (
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${underlineColor} scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 rounded-full`} />
              )}
            </Link>
            <Dropdown submenus={item.children} key={`dropdown_${item.path}`} />
          </>
        ) : (
          <Link
            href={item.path}
            target={item.target}
            className={`relative px-4 py-2 mr-2 transition-all duration-300 cursor-pointer focus:outline-none rounded-md ${
              isActive
                ? `${activeColor} font-semibold`
                : `${defaultColor} ${hoverColor}`
            }`}
          >
            {item.name}
            {isActive && (
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${underlineColor} rounded-full`} />
            )}
            {!isActive && (
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${underlineColor} scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 rounded-full`} />
            )}
          </Link>
        )}
      </div>
    </>
  );
}
