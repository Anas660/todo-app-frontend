import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ReactQueryProvider>
          <main className="flex-1">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
