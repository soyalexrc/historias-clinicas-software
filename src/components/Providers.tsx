'use client';

import {Provider} from "react-redux";
import {store} from "@/lib/store";
import {ClerkProvider} from "@clerk/nextjs";

export default function Providers({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Provider store={store}>
            <ClerkProvider>
                {children}
            </ClerkProvider>
        </Provider>
    )
}
