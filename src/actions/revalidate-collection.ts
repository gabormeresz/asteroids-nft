"use server";

import { revalidatePath } from "next/cache";

export const revalidateCollection = () => {
  console.log("collection revalidated");
  revalidatePath("/collection");
};
