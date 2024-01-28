import { CommonNftTraits, Metadata, NftRarity } from "@/types";

export const prepareMetadata = (metadata: Metadata) => {
  let lore: string[] = [];
  let traits: CommonNftTraits[] = [];
  let rarity: NftRarity;

  if (metadata.attributes[0].value === "Legendary") {
    rarity = NftRarity.LEGENDARY;
    lore = metadata.attributes[1].value.split("\n");
  } else {
    rarity = NftRarity.COMMON;
    traits = [
      {
        traitType: "Composition",
        traitValue: metadata.attributes[0]?.value,
        lore: metadata.attributes[1]?.value
      },
      {
        traitType: "Orbit Pattern",
        traitValue: metadata.attributes[2]?.value,
        lore: metadata.attributes[3]?.value
      },
      {
        traitType: "Quirkiness",
        traitValue: metadata.attributes[4]?.value,
        lore: metadata.attributes[5]?.value
      }
    ];
  }
  return { rarity, traits, lore };
};
