import { Collection } from "@/types";

export const getCollection = async () => {
  try {
    const response = await fetch(`${process.env.BACKEND_APP_URL}/collection`);
    const collection = (await response.json()) as Collection;

    return collection;
  } catch (err) {
    console.error("Error fetching collection data", err);
  }
};
