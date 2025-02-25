"use client";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { setProducts } from "@/libs/redux/slices/productSlice";
import { Product } from "@/types/products.type";
import { Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductsContainer = ({ products }: Props) => {
  const dispatch = useAppDispatch();

  const { productsList } = useAppSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  // conditions
  const noProduct = searchText?.length > 0 && filteredProducts.length === 0;

  useEffect(() => {
    setFilteredProducts(products);
    dispatch(setProducts(products));
  }, [products]);

  useEffect(() => {
    if (searchText.length > 1) {
      // debouncing ...
      const timeout = setTimeout(() => {
        setFilteredProducts(
          productsList.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }, 1500);
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
        {filteredProducts?.length > 0
          ? filteredProducts?.map((item) => (
              <ProductCard product={item} key={item.id} />
            ))
          : noProduct && (
              <Typography variant="h5" sx={{ color: "text.secondary", p: 2 }}>
                No product found
              </Typography>
            )}
      </Stack>
    </>
  );
};

export default ProductsContainer;
