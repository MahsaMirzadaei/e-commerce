"use client";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { setProducts } from "@/libs/redux/slices/productSlice";
import { Product } from "@/types/products.type";
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
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

  const { productsList } = useAppSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    dispatch(setProducts(products));
    setFilteredProducts(productsList);
  }, [products]);

  useEffect(() => {
    if (searchText.length > 3) {
      const timeout = setTimeout(() => {
        setFilteredProducts(
          productsList.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }, 300);
      return () => clearTimeout(timeout);
    } else if (searchText === "") {
      setFilteredProducts(productsList);
    }
  }, [searchText, productsList]);

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <TextField
        id="outlined-basic"
        label="Search product"
        variant="outlined"
        value={searchText}
        sx={{ width: "100%", m: 2 }}
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
              <CardActionArea sx={CardActionAreaSx}>
                <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                  />
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
                <Typography
                  variant="h5"
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
    </Container>
  );
};

export default ProductsContainer;
