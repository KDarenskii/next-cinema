import type { Metadata } from "next";

import { FC, PropsWithChildren } from "react";

import { Container } from "@/components/layout/Container";
import { Sidebar } from "@/components/layout/Sidebar";
import QueryProvider from "@/components/providers/QueryProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";

import "../assets/styles/index.scss";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Next Cinema | Home",
    description: "Search and watch thousands of films and tv series",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryProvider>
            <ReduxProvider>
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
            </ReduxProvider>
        </QueryProvider>
    );
};

export default RootLayout;
