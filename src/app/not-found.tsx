"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        marginTop: "5rem",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back Home</Link>
    </div>
  );
}
