import type { Metadata } from "next";
import "../styles/globals.css";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import ClientWrapper from "@/components/client/layout/ClientWrapper";

export const metadata: Metadata = {
  title: "Itoll e-commerce",
  description: "Generated by Itoll Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
        </ClientWrapper>
      </body>
    </html>
  );
}
