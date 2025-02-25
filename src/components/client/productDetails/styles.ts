import { SxProps } from "@mui/material";

export const containerBoxSx: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  mt: 3,
};

export const imgBoxSx: SxProps = {
  width: { xs: "15rem", lg: "30vw" },
  maxWidth: "20rem",
  height: "20rem",
  position: "relative",
  display: "block",
  margin: "auto",
};

export const verticalDividerSx: SxProps = {
  height: "auto",
  mx: 2,
  display: { xs: "none", md: "block" },
};
export const infoSx: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  mt: 3,
};
