import Link from "next/link";

export default function Dropdown({ submenus }) {
  return (
    <>
      <ul className="dropdown min-w-56 overflow-hidden rounded-card border border-primary/10 bg-white p-2 shadow-soft-lg">
        <li aria-hidden="true" className="h-2" />
        {submenus.map((submenu, index) => (
          <li key={'sub-menu-dropdown-li'+submenu.path+index}>
            <Link
              href={submenu.path}
              key={'sub-menu-dropdown-link'+submenu.path+index}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-primary-lightest/70 hover:text-primary"
            >
              {submenu.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
