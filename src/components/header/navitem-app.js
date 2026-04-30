"use client";
import Link from "next/link";
import Dropdown from "./dropdown";
import { usePathname } from "next/navigation";

export default function NavItemApp({ item }) {
  const pathname = usePathname();
  const isActive =
    pathname === item.path ||
    (item.path !== "/" && pathname?.startsWith(`${item.path}/`));
  const activeClass = isActive
    ? "bg-primary-lightest text-primary"
    : "text-gray-700 hover:bg-primary-lightest/60 hover:text-primary";

  return (
    <>
      <div className="navitem">
        {item.children ? (
          <>
            <Link
              href={item.path}
              target={item.target}
              className={`relative block rounded-pill px-3 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${activeClass}`}
            >
              {item.name}
            </Link>
            <Dropdown submenus={item.children} key={`dropdown_${item.path}`} />
          </>
        ) : (
          <Link
            href={item.path}
            target={item.target}
            className={`relative block rounded-pill px-3 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${activeClass}`}
          >
            {item.name}
          </Link>
        )}
      </div>
    </>
  );
}
