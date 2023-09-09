import type { Metadata } from "next";

import { ReactNode } from "react";

import { Container } from "@/components/Container";
import { Sidebar } from "@/components/layout/Sidebar";
import QueryProvider from "@/components/providers/QueryProvider";

import "../assets/styles/index.scss";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "Next Cinema | Home",
    description: "Search and watch thousands of films and tv series",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <QueryProvider>
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
        </QueryProvider>
    );
};

export default RootLayout;
