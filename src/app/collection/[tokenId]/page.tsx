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
      className={`flex flex-col items-center gap-10 md:gap-14 ${jura.variable} font-mono text-white`}
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="uppercase text-2xl sm:text-3xl tracking-widest text-center font-light p-4 pt-0 sm:pt-4 md:p-10 md:pb-4">
          {`#${params.tokenId} - ${metadata.name}`}
        </h1>
        <ShowTokenOwner owner={tokenOwner} />
      </div>
      <div className="flex flex-col items-center md:flex-row gap-10 2xl:gap-20 px-10 lg:px-20 xl:px-40">
        <Image
          src={metadata.image}
          alt="asteroid"
          width={640}
          height={640}
          priority
          className="rounded-3xl drop-shadow-sm-black md:min-w-[350px] lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[500px] object-contain"
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
