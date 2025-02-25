const Base = "https://fakestoreapi.com/";

export const ReturnConfig = async (res: any) => {
  try {
    if (res.ok) {
      return res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.errorMessage || "An error occurred");
    }
  } catch (error: any) {
    return { error: error.message };
  }
};

// ----------------------------------- server routes ----------------------------------
export async function products() {
  const res = await fetch(`${Base}products`);
  return await ReturnConfig(res);
}
