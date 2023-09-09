import { Metadata } from "next";

import { FC, PropsWithChildren } from "react";

import { Search } from "@/components/Search";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Next Cinema | TV Series",
    description: "TV series of all genres and countries in one place",
};

const SeriesLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Search className={styles.search} />
            {children}
        </>
    );
};

export default SeriesLayout;
