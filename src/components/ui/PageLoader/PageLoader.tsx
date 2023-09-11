"use client";

import { FC } from "react";

import { CircleLoader } from "../CircleLoader";

import styles from "./pageLoader.module.scss";

const PageLoader: FC = () => {
    return (
        <div className={styles.loader}>
            <CircleLoader size={50} speedMultiplier={0.5} />
        </div>
    );
};

export default PageLoader;
