import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jura } from "@/fonts";
import * as actions from "@/actions";
import * as utils from "@/utils";
import Button from "@/components/ui/button";
import ShowTokenOwner from "@/components/token/token-owner";
import TokenDescription from "@/components/token/token-description";

type TokenPageProps = {
  params: {
    tokenId: string;
  };
};

const TokenPage = async ({ params }: TokenPageProps) => {
  const [tokenURI, tokenOwner] = await actions.getTokenURIAndOwner(
    params.tokenId
  );
  const metadata = await actions.fetchMetaData(tokenURI);

  if (!metadata) {
    notFound();
  }

  const { rarity, lore, traits } = utils.prepareMetadata(metadata);

  return (
    <div
      className={`flex flex-col items-center gap-14 ${jura.variable} font-mono text-white`}
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="uppercase text-3xl tracking-widest font-light">
          {`#${params.tokenId} - ${metadata.name}`}
        </h1>
        <ShowTokenOwner owner={tokenOwner} />
      </div>
      <div className="flex flex-row gap-10 px-20 pl-40">
        <Image
          src={metadata.image}
          alt="asteroid"
          width={350}
          height={350}
          priority
          className="rounded-3xl drop-shadow-sm-black min-h-[350px]"
        />
        <TokenDescription rarity={rarity} lore={lore} traits={traits} />
      </div>
      <Link href="/">
        <Button text="BACK TO HOME" secondary />
      </Link>
    </div>
  );
};

export default TokenPage;
