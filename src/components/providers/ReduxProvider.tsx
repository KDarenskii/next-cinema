"use client";

import { FC, PropsWithChildren } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/store";

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
    );
};

export default ReduxProvider;