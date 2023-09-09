import type { Metadata } from "next";

import { FC, PropsWithChildren, ReactNode } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Container } from "@/components/Container";
import { Sidebar } from "@/components/layout/Sidebar";
import AppProvider from "@/components/providers/AppProvider";
import QueryProvider from "@/components/providers/QueryProvider";

import { persistor, store } from "@/store/store";

import "../assets/styles/index.scss";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Next Cinema | Home",
    description: "Search and watch thousands of films and tv series",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <AppProvider>
            <html lang="en">
                <body>
                    <div className={styles.layout}>
                        <Container>
                            <div className={styles.wrapper}>
                                <Sidebar />
                                <main>{children}</main>
                            </div>
                        </Container>
                    </div>
                </body>
            </html>
        </AppProvider>
    );
};

export default RootLayout;
