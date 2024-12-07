"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export const Providers = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props} 
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange>{children}</NextThemesProvider>
}