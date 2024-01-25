"use server";

import { revalidatePath } from "next/cache";

export const revalidateItem = (tokenId: number) => {
  console.log(`item ${tokenId} revalidated`);
  revalidatePath(`/collection/${tokenId.toString()}`);
};
