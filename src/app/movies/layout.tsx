import { Metadata } from "next";

import { FC, PropsWithChildren } from "react";

import { Search } from "@/components/Search";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Next Cinema | Movies",
    description: "Movies of all genres and countries in one place",
};

const MoviesLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Search className={styles.search} />
            {children}
        </>
    );
};

export default MoviesLayout;
