import Link from "next/link";
import { useState } from "react";
import Dropdown from "./dropdown";
import { styles } from './header.module.css';
import { useRouter } from "next/router";

export default function NavItem(props) {
    const navitems = props?.item;
    const router = useRouter();
    // console.log(router.asPath);
    return (
        <>
            <div className="navitem">
                {navitems.children ? (<>
                    <Link href={navitems.path}><a target={navitems.target}><span className=
                        {`p-4 border-b-2 mr-4 border-b-amber-400 hover:border-b-amber-600 hover:text-amber-600 cursor-pointer ${router.asPath == navitems.path ? 'active' : ''}`}>{navitems.name}</span></a></Link>
                    <Dropdown submenus={navitems.children} /></>) : (<><Link href={navitems.path} asPath={navitems.asPath}><a target={navitems.target}><span className={`p-4 border-b-2 mr-4 border-b-amber-400 hover:border-b-amber-600 hover:text-amber-600 cursor-pointer ${router.asPath == navitems.path ? 'active' : ''}`}>
                        {navitems.name}
                    </span></a></Link></>)}
            </div>
            <style jsx>{`
                .active {
                --tw-border-opacity: 1;
                border-bottom-color: rgb(249 115 22 / var(--tw-border-opacity));
                --tw-text-opacity: 1;
                color: rgb(249 115 22 / var(--tw-text-opacity))
                }`}</style>
        </>
    );
}