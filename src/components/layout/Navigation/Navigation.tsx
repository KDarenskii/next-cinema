import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import cn from "clsx";

import { navLinks } from "./navigation.data";
import styles from "./navigation.module.scss";

interface Props {
    className?: string;
}

const Navigation: FC<Props> = ({ className }) => {
    return (
        <nav className={cn(styles.nav, className)}>
            {navLinks.map(({ alt, height, href, src, width }) => (
                <Link href={href} key={href}>
                    <Image src={src} width={width} height={height} alt={alt} />
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
