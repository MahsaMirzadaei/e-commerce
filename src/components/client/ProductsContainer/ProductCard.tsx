import { Product } from "@/types/products.type";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CardActionAreaSx, imgBoxSx } from "./styles";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 450,
      }}
    >
      <CardActionArea
        sx={CardActionAreaSx}
        onClick={() => {
          router.push(`/${product.id}`);
        }}
      >
        <Box sx={imgBoxSx}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="10rem"
            style={{ objectFit: "contain" }}
            // lazy loading ...
            priority={false}
          />
        </Box>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", alignSelf: "start" }}
        >
          Price : {product.price} $
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
