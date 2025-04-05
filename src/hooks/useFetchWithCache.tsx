import { useAppDispatch } from "@/libs/redux/hooks";
import { setProducts } from "@/libs/redux/slices/productSlice";
import React, { useEffect, useState } from "react";

type Props = {
  url: string;
  refetchCount?: number;
  callbackErrorFn?: (error: Error) => void;
};

const useFetchWithCache = ({
  url,
  refetchCount = 3,
  callbackErrorFn,
}: Props) => {
  const dispatch = useAppDispatch();
  const [res, setRes] = useState<unknown>();

  const fetchApi = (refetchCountValue: number) => {
    fetch(url)
      .then(async (response) => {
        const ress = await response.json();
        console.log(ress);
        dispatch(setProducts(ress));
      })
      .catch((error) => {
        refetchCountValue - 1 > 0 && fetchApi(refetchCountValue - 1);
        console.error(error);
        callbackErrorFn?.(error);
      });
  };

  useEffect(() => {
    fetchApi(refetchCount);
  }, []);

  return { res };
};

export default useFetchWithCache;
