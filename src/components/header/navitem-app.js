"use client";
import Link from "next/link";
import Dropdown from "./dropdown";
import { usePathname } from "next/navigation";

export default function NavItemApp({ item }) {
  const pathname = usePathname();

  return (
    <>
      <div className="navitem">
        {item.children ? (
          <>
            <Link
              href={item.path}
              target={item.target}
              className={`p-4 mr-4 hover:border-b-2 hover:border-b-amber-600 hover:text-amber-600 cursor-pointer ${pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
            <Dropdown submenus={item.children} key={`dropdown_${item.path}`} />
          </>
        ) : (
          <Link
            href={item.path}
            target={item.target}
            className={`p-4 mr-4 hover:border-b-2 hover:border-b-amber-600 hover:text-amber-600 cursor-pointer ${pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        )}
      </div>
      <style jsx>{`
        .active {
          border-bottom-width: 2px;
          --tw-border-opacity: 1;
          border-bottom-color: rgb(249 115 22 / var(--tw-border-opacity));
          --tw-text-opacity: 1;
          color: #C4421A;
        }
      `}</style>
    </>
  );
}
