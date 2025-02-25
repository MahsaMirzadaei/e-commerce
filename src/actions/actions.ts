const Base = "https://fakestoreapi.com/";

export const ReturnConfig = async (res: Response) => {
  try {
    const data = await res.json();
    if (res.ok) {
      if (data) {
        return data;
      }
    } else {
      console.error(data);
      throw new Error("Oops! someThing went wrong.");
    }
  } catch (error: unknown) {
    throw new Error("Oops! someThing went wrong.");
  }
};

// ----------------------------------- server routes ----------------------------------
export async function products() {
  const res = await fetch(`${Base}products`);
  return await ReturnConfig(res);
}

export async function productDetails(id: string) {
  const res = await fetch(`${Base}products/${id}`);
  return await ReturnConfig(res);
}
