import { productDetails } from "@/actions/actions";
import CardBox from "@/components/UI/CardBox";
import {
  containerBoxSx,
  imgBoxSx,
  infoSx,
  verticalDividerSx,
} from "@/components/client/productDetails/styles";
import { Product } from "@/types/products.type";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productDetails: string }>;
}) {
  const { productDetails: id } = await params;
  const details = await productDetails(id);

  return {
    title: details.title,
  };
}

interface Props {
  params: Promise<{ productDetails: string }>;
}

const ProductDetials = async ({ params }: Props) => {
  const { productDetails: id } = await params;
  const details: Product = await productDetails(id);

  return (
    <Box sx={containerBoxSx}>
      <Box sx={imgBoxSx}>
        <Image
          src={details.image}
          alt={details.title}
          fill
          sizes="(max-width: 1200px) 15rem, 30vw"
          style={{ objectFit: "contain" }}
          priority={false}
        />
      </Box>

      <Divider sx={verticalDividerSx} orientation="vertical" />

      {/* ---------------------------------------- info */}
      <Box sx={infoSx}>
        <Typography gutterBottom variant="h5">
          {details.title}
        </Typography>
        <Chip label={details.category} variant="outlined" />
        {/* create reusable ui component ...*/}
        <CardBox surface sx={{ width: "90%", my: 2 }}>
          {details.description}
        </CardBox>

        {/* ---------------- price */}
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
