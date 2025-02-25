"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import "./globals.css";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box className="error-container">
      <Typography variant="h6"> 404 : {error.message}</Typography>
      <Link href="/">Go back Home</Link>
    </Box>
  );
}
