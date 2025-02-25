import { productDetails } from "@/actions/actions";
import CardBox from "@/components/UI/CardBox";
import { Product } from "@/types/products.type";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  params: Promise<{ productDetails: string }>;
}

const ProductDetials = async ({ params }: Props) => {
  const { productDetails: id } = await params;
  const details: Product = await productDetails(id);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        mt: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: "15rem", lg: "30vw" },
          maxWidth: "20rem",
          height: "20rem",
          position: "relative",
          display: "block",
          margin: "auto",
        }}
      >
        <Image
          src={details.image}
          alt={details.title}
          fill
          sizes="(max-width: 1200px) 15rem, 30vw"
          style={{ objectFit: "contain" }}
          priority={false}
        />
      </Box>

      <Divider
        sx={{ height: "auto", mx: 2, display: { xs: "none", md: "block" } }}
        orientation="vertical"
      />

      {/* ---------------------------------------- info */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
        <Typography gutterBottom variant="h5">
          {details.title}
        </Typography>
        <Chip label={details.category} variant="outlined" />
        <CardBox surface sx={{ width: "90%", my: 2 }}>
          {details.description}
        </CardBox>
        {/* ---------------------------------------- price */}
        <Typography variant="h5" fontWeight="bold" color="primary.main">
          {details.price} $
        </Typography>
        <Divider sx={{ width: "12rem" }} />
        <Button>Add to basket</Button>
      </Box>
    </Box>
  );
};

export default ProductDetials;
