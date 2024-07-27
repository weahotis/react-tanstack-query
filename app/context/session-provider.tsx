"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface SessionContextProviderProps {
    children: ReactNode;
}

function SessionContextProvider({ children }: SessionContextProviderProps) {
    return <SessionProvider>{ children } </SessionProvider>;
}

export default SessionContextProvider;
