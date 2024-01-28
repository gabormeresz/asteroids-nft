export type Attributes = {
  value: string;
  trait_type?: string;
};

export type Metadata = {
  name: string;
  image: string;
  description: string;
  attributes: Attributes[];
};

type CollectionItem = {
  tokenId: number;
  tokenOwner: string;
  name: string;
  image: string;
};

export type Collection = CollectionItem[];

export type NFTData = {
  tokenId: number;
  tokenOwner: string;
  metadata: Metadata;
};

export enum NftRarity {
  LEGENDARY = "LEGENDARY",
  COMMON = "COMMON"
}

export type CommonNftTraits = {
  traitType: string;
  traitValue: string;
  lore: string;
};
