'use client';

import * as Ably from "ably";
import {AblyProvider, ChannelProvider} from "ably/react";
import {Provider} from "react-redux";
import {store} from "@/lib/store";

export default function Providers({children}: Readonly<{ children: React.ReactNode }>) {

    const client = new Ably.Realtime({key: process.env.NEXT_PUBLIC_ABLY_API_KEY})

    return (
        <Provider store={store}>
            <AblyProvider client={client}>
                <ChannelProvider channelName='ATENCION'>
                    {children}
                </ChannelProvider>
            </AblyProvider>
        </Provider>
    )
}
