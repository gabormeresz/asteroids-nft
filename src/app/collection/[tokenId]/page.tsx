import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jura } from "@/fonts";
import * as utils from "@/utils";
import Button from "@/components/ui/button";
import ShowTokenOwner from "@/components/token/token-owner";
import TokenDescription from "@/components/token/token-description";
import { maxSupply } from "@/constants";

type TokenPageProps = {
  params: {
    tokenId: string;
  };
};

export function generateStaticParams() {
  const staticParams = utils
    .range(1, maxSupply)
    .map((id) => ({ tokenId: id.toString() }));
  return staticParams;
}

const TokenPage = async ({ params }: TokenPageProps) => {
  const nftData = await utils.getNFT(params.tokenId);
  if (!nftData) notFound();

  const { metadata, tokenOwner } = nftData;
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
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNkqGfAAIxDWRAAOIQFAap6xDkAAAAASUVORK5CYII="
          className="rounded-3xl drop-shadow-sm-black md:min-w-[350px] lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[500px] object-contain"
        />
        <TokenDescription rarity={rarity} lore={lore} traits={traits} />
      </div>

      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <Link href="/">
          <Button text="BACK TO HOME" />
        </Link>
        <Link href="/collection">
          <Button text="VIEW COLLECTION" secondary />
        </Link>
      </div>
    </div>
  );
};

export default TokenPage;
