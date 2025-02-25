import ProductsContainer from "@/components/client/ProductsContainer";
import { products } from "../actions/actions";

export default async function Home() {
  // api
  const productsList = await products();
  // const productsList: any[] = [];

  // console.log(productsList);
  return <ProductsContainer products={productsList} />;
}
