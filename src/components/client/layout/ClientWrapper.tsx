"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { img } from "@/constants/images";
import StoreProvider from "@/libs/redux/StoreProvider";
import ThemeWrapper from "@/theme/ThemeWrapper";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ClientWrapper = ({ children }: Props) => {
  return (
    <AppRouterCacheProvider>
      <ThemeWrapper>
        <StoreProvider>
          <AppBar position="fixed" sx={{ backgroundColor: "text.primary" }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Itoll E-Commerce
              </Typography>
              <Link href="/">
                <Image
                  src={img.logo}
                  alt="logo"
                  width={50}
                  height={50}
                  priority={false}
                />
              </Link>
            </Toolbar>
          </AppBar>
          <Container maxWidth="xl" sx={{ p: 2, pt: 5 }}>
            {children}
          </Container>
        </StoreProvider>
      </ThemeWrapper>
    </AppRouterCacheProvider>
  );
};

export default ClientWrapper;
