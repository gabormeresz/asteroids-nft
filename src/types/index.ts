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

export type CollectionItem = {
  tokenOwner: string;
  metadata: Metadata | undefined;
};

export enum TokenRarity {
  LEGENDARY = "LEGENDARY",
  COMMON = "COMMON"
}

export type CommonTokenTraits = {
  traitType: string;
  traitValue: string;
  lore: string;
};
