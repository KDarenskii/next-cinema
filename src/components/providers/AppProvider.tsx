"use client";

import { FC, PropsWithChildren } from "react";

import QueryProvider from "./QueryProvider";
import ReduxProvider from "./ReduxProvider";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryProvider>
            <ReduxProvider>{children}</ReduxProvider>
        </QueryProvider>
    );
};

export default AppProvider;
