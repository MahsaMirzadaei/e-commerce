import ProductsContainer from "@/components/client/ProductsContainer";
import { products } from "../actions/actions";

export default async function Home() {
  // api
  const productsList = await products();

  console.log(productsList);
  return (
    <div>
      <ProductsContainer products={productsList} />
    </div>
  );
}
