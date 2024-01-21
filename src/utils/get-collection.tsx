import * as utils from "@/utils";
import { CollectionItem } from "@/types";
import { getTotalMintedItems } from "@/utils";

export const getCollection = async () => {
  let collection: CollectionItem[] = [];
  try {
    const totalSupply = await getTotalMintedItems();

    if (!totalSupply) throw new Error("Error loading data from contract");
    if (totalSupply === 0) throw new Error("No NFT minted yet");

    for (const id of utils.range(1, totalSupply)) {
      const [tokenURI, tokenOwner] = await utils.getTokenURIAndOwner(
        id.toString()
      );
      const metadata = await utils.fetchMetaData(tokenURI);

      collection[id - 1] = { tokenOwner, metadata };
    }
  } catch (err) {
    console.error("Error fetching collection data", err);
  }
  return collection;
};
