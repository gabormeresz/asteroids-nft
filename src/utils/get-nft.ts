import { NFTData } from "@/types";

export const getNFT = async (tokenId: string) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_APP_URL}/nft?tokenId=${tokenId}`,
      {
        next: { tags: [tokenId] }
      }
    );
    const nft = (await response.json()) as NFTData;

    return nft;
  } catch (err) {
    console.error("Error fetching collection data", err);
  }
};
