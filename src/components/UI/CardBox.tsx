"use client";
import { alpha, Box, SxProps, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

interface InitCardBoxPropsType {
  children: React.ReactNode;
  surface: boolean;
  sx: SxProps;
  href: string;
  onClick?: () => void;
}

type CardBoxPropsType = Partial<InitCardBoxPropsType>;

const CardBox = ({
  children,
  surface = false,
  sx,
  href,
  onClick,
}: CardBoxPropsType) => {
  const { palette } = useTheme();
  return (
    <Box
      component={href ? Link : Box}
      href={href}
      onClick={onClick}
      sx={{
        borderRadius: "0.75rem",
        display: "block",
        backgroundColor: surface
          ? alpha(palette.primary.main, 0.1)
          : palette.background.default,
        width: "100%",
        height: "fit-content",
        py: 1,
        px: 2,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CardBox;
