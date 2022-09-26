import Link from "next/link";
import styles from './header.module.css';

export default function Dropdown ({submenus}) {
    return (
      <ul className='dropdown'>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items hover:bg-amber-500 border-b-2">
            <Link href={submenu.path} asPath={submenu.asPath}>{submenu.name}</Link>
          </li>
        ))}
      </ul>
    );
  };
