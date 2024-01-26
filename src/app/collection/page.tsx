import Link from "next/link";
import Image from "next/image";
import { jura } from "@/fonts";
import Button from "@/components/ui/button";
import { getCollection } from "@/utils/get-collection";

const CollectionPage = async () => {
  const collection = (await getCollection()) || [];

  return (
    <div
      className={`flex flex-col items-center gap-10 md:gap-14 ${jura.variable} font-mono font-light text-white px-10 sm:px-32`}
    >
      <h1 className="uppercase text-2xl sm:text-3xl tracking-widest text-center font-light p-4 pt-0 sm:pt-4 md:p-10 md:pb-4">
        THE ASTEROIDS COLLECTION
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-12">
        {collection.map((item) => {
          return (
            <Link
              href={`/collection/${item.tokenId.toString()}`}
              key={item.tokenId}
            >
              <div className="flex flex-col p-6 w-[288px] h-[400px] gap-4 rounded-3xl shadow-sm-black bg-black bg-opacity-50 text-gray-200">
                <Image
                  src={item.image}
                  alt="asteroid nft"
                  width={240}
                  height={240}
                  className="rounded-3xl"
                />
                <div className="text-xl sm:text-2xl tracking-widest text-center">
                  #{item.tokenId}
                </div>
                <div className="text-lg uppercase tracking-wide text-center">
                  {item.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Link href="/">
        <Button text="BACK TO HOME" secondary />
      </Link>
    </div>
  );
};

export default CollectionPage;
