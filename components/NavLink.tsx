import Link from "next/link";

const NavLink = ({ href, title} : {href:any, title: any}) => {
    return(
        <Link href={href}>{title}</Link>

    );
};

export default NavLink;
