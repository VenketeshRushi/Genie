"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "./ui/tooltip";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  );
}

export function Provider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
