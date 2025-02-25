"use client";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { setProducts } from "@/libs/redux/slices/productSlice";
import { Product } from "@/types/products.type";
import { Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

interface Props {
  products: Product[];
}

// In React 19, useMemo and useCallback are no longer needed
const ProductsContainer = ({ products }: Props) => {
  const dispatch = useAppDispatch();

  const { productsList } = useAppSelector((state) => state.product);

  const [searchText, setSearchText] = useState<string>("");

  const debouncedSearchText = useDebouncedValue(searchText, 1500);
  const filteredProducts =
    debouncedSearchText.length > 0
      ? productsList.filter((item) =>
          item.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
        )
      : productsList;

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  // conditions
  const noProduct = searchText?.length > 0 && filteredProducts.length === 0;

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
