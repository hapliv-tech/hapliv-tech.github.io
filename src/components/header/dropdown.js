import Link from "next/link";
import styles from './header.module.css';

export default function Dropdown({ submenus }) {
  return (
    <>
      <ul className='dropdown drop-shadow'>
        {submenus.map((submenu, index) => (
          <li key={'sub-menu-dropdown-li'+submenu.path+index} className="border-b-2 menu-items hover:bg-[#4B1282] hover:text-white text-color-black">
            <Link href={submenu.path} asPath={submenu.path} key={'sub-menu-dropdown-link'+submenu.path+index}><a className="block pl-2 pr-2">{submenu.name}</a></Link>
          </li>
        ))}
      </ul>
    </>
  );
};
