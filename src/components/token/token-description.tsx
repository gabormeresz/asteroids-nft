import { CommonTokenTraits, TokenRarity } from "@/types";

type TokenDescriptionProps = {
  rarity: TokenRarity;
  lore: string[];
  traits: CommonTokenTraits[];
};

const TokenDescription = ({ rarity, lore, traits }: TokenDescriptionProps) => {
  if (rarity === TokenRarity.LEGENDARY) {
    return (
      <div className="flex flex-col font-light gap-2 leading-tight">
        <h2 className="text-2xl pb-3 font-normal text-gray-200">Legendary</h2>
        {lore.map((paragraph, i) => (
          <p key={i} className="text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
    );
  } else if (rarity === TokenRarity.COMMON) {
    return (
      <div className="flex flex-col gap-8 leading-tight">
        {traits.map((trait, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-sm font-light leading-tight">
              {trait.traitType}
            </h3>
            <p className="text-lg font-normal pb-1">{trait.traitValue}</p>
            <p className="text-gray-300 font-light">{trait.lore}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default TokenDescription;
