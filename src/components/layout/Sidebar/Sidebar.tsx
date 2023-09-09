import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import { HOME_ROUTE } from "@/constants/routesPathnames";

import Navigation from "../Navigation/Navigation";
import styles from "./sidebar.module.scss";

const Sidebar: FC = () => {
    return (
        <aside>
            <div className={styles.body}>
                <Link href={HOME_ROUTE}>
                    <Image
                        className={styles.logoImg}
                        src={"/img/camera.svg"}
                        width={30}
                        height={40}
                        alt="Camera"
                    />
                </Link>
                <Navigation className={styles.nav} />
            </div>
        </aside>
    );
};

export default Sidebar;
