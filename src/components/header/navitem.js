import Link from "next/link";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";

export default function NavItem(props) {
    const navitems = props?.item;
    const router = useRouter();

    return (
        <>
            <div className="navitem">
                {navitems.children ? (
                    <>
                        <Link
                            href={navitems.path}
                            key={'nested_item_link' + navitems.path}
                            target={navitems.target}
                            className={`p-4 mr-4 hover:border-b-2 hover:border-b-amber-600 hover:text-amber-600 cursor-pointer ${router.asPath == navitems.path ? 'active' : ''}`}
                        >
                            {navitems.name}
                        </Link>
                        <Dropdown submenus={navitems.children} key={'dropdown_' + navitems.path} />
                    </>
                ) : (
                    <>
                        <Link
                            href={navitems.path}
                            key={'no_child_nav_item_link' + navitems.path}
                            target={navitems.target}
                            className={`p-4 mr-4 hover:border-b-2 hover:border-b-amber-600 hover:text-amber-600 cursor-pointer ${router.asPath == navitems.path ? 'active' : ''}`}
                        >
                            {navitems.name}
                        </Link>
                    </>
                )}
            </div>
            <style jsx>{`
                .active {
                    border-bottom-width: 2px;
                    --tw-border-opacity: 1;
                    border-bottom-color: rgb(249 115 22 / var(--tw-border-opacity));
                    --tw-text-opacity: 1;
                    color: #C4421A;
                }`}</style>
        </>
    );
}
