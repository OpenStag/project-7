// app/layout.tsx or app/layout.js
import './globals.css' // or any global styles
import { ReactNode } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Books",
  description: "test1234",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
