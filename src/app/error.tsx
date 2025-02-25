"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        mt: 7,
      }}
    >
      <Typography variant="h6"> 404 : {error.message}</Typography>
      <Link href="/">Go back Home</Link>
    </Box>
  );
}
