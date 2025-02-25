"use client";
import Link from "next/link";
import { useEffect } from "react";
import "./globals.css";

export default function NotFound({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back Home</Link>
    </div>
  );
}
