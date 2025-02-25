"use client";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { setProducts } from "@/libs/redux/slices/productSlice";
import { Product } from "@/types/products.type";
import {
  Box,
  Card,
  CardActionArea,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CardActionAreaSx: SxProps = {
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  p: 2,
  gap: 1,
};

interface Props {
  products: Product[];
}

const ProductsContainer = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { productsList } = useAppSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    dispatch(setProducts(products));
    setFilteredProducts(productsList);
  }, [products]);

  useEffect(() => {
    if (searchText.length > 1) {
      const timeout = setTimeout(() => {
        setFilteredProducts(
          productsList.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (searchText === "") {
      setFilteredProducts(productsList);
    }
  }, [searchText, productsList]);

  return (
    <>
      <TextField
        label="Search product"
        variant="outlined"
        value={searchText}
        sx={{ width: "100%", my: 2 }}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
        {filteredProducts?.length > 0 ? (
          filteredProducts?.map((item) => (
            <Card
              key={item.id}
              sx={{
                maxWidth: 345,
                minHeight: 450,
              }}
            >
              <CardActionArea
                sx={CardActionAreaSx}
                onClick={() => {
                  router.push(`/${item.id}`);
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    priority={false}
                  />
                </Box>
                <Typography gutterBottom variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "primary.main", alignSelf: "start" }}
                >
                  Price : {item.price} $
                </Typography>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <Typography variant="h5" sx={{ color: "text.secondary", p: 2 }}>
            No product found
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default ProductsContainer;
