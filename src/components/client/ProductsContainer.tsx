"use client";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { setProducts } from "@/libs/redux/slices/productSlice";
import { Product } from "@/types/products.type";
import React, { useEffect } from "react";

interface Props {
  products: Product[];
}

const ProductsContainer = ({ products }: Props) => {
  const dispatch = useAppDispatch();

  const { productsList } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  return <div>ProductsContainer</div>;
};

export default ProductsContainer;
