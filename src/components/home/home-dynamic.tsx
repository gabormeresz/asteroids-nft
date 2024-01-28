"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount
} from "@web3modal/ethers/react";
import { jura } from "@/fonts";
import * as actions from "@/actions";
import { contractAddress, contractABI } from "@/constants/index";
import Button from "@/components/ui/button";
import Loading from "@/components/ui/loading";
import MintingModal from "@/components/home/minting-modal";
import ConnectButton from "@/components/layout/connect-button";

const HomeDynamicContent = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [hasMinted, setHasMinted] = useState(false);
  const [userTokenId, setUserTokenId] = useState<number | undefined>(undefined);
  const [tokenIdHasLoaded, setTokenIdHasLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mintTxHash, setMintTxHash] = useState("test hash");

  useEffect(() => {
    setHasMinted(false);
  }, [address]);

  useEffect(() => {
    const getMintedTokenId = async () => {
      const userTokenId = await actions.getMintedTokenId(address);
      setUserTokenId(userTokenId);
      setTokenIdHasLoaded(true);
      // if (hasMinted && userTokenId) {
      //   actions.revalidateItem(userTokenId.toString());
      // }
    };
    if (isConnected && chainId === 80001) {
      getMintedTokenId();
    }
  }, [isConnected, hasMinted, address, chainId]);

  const mintHandler = async () => {
    try {
      if (!isConnected) throw Error("User disconnected");
      if (!walletProvider) return;
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();
      const AsteroidsContract = new Contract(
        contractAddress,
        contractABI,
        signer
      );
      const mint = await AsteroidsContract.mint();
      setMintTxHash(mint.hash);
      setIsModalOpen(true);
      await mint.wait();
      setIsModalOpen(false);
      setMintTxHash("");
      setHasMinted(true);
    } catch (error) {
      console.log(error);
    }
  };

  let content: React.ReactElement;

  if (!isConnected) {
    content = (
      <div className="flex flex-col items-center gap-10 max-w-4xl min-h-48 px-10">
        <div
          className={`flex flex-col items-center gap-2 text-white font-light ${jura.variable} font-mono`}
        >
          <h2 className="text-2xl">
            Welcome to the Cosmos Craze Minting Page,
          </h2>
          <div className="pb-8">
            <p className="sm:text-center">
              where celestial wonders and cosmic whimsy collide! Unleash your
              stellar creativity by connecting your wallet and minting a
              one-of-a-kind NFT from our vibrant asteroid collection. Connect
              now and mint your celestial masterpiece! 🚀💫
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <ConnectButton />
            <Link href="/collection">
              <Button text="VIEW COLLECTION" secondary />
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (chainId !== 80001) {
    content = (
      <div className="flex flex-col items-center gap-10 max-w-4xl min-h-48 px-10">
        <div
          className={`flex flex-col items-center gap-2 text-white font-light ${jura.variable} font-mono`}
        >
          <h2 className="text-2xl">
            Welcome to the Cosmos Craze Minting Page,
          </h2>
          <p className="sm:text-center">
            dive into a universe of color, neon brilliance, and playful memes as
            you embark on a journey to claim your own piece of the cosmic
            mosaic.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <Button
            text="⚠️ Wrong Network. Please change to Mumbai!"
            disabled
            warning
          />
          <Link href="/collection">
            <Button text="VIEW COLLECTION" secondary />
          </Link>
        </div>
      </div>
    );
  } else if (!tokenIdHasLoaded) {
    content = <Loading />;
  } else if (!userTokenId) {
    content = (
      <div className="flex flex-col items-center gap-10 max-w-4xl min-h-48 px-10">
        <div
          className={`flex flex-col items-center gap-2 text-white font-light ${jura.variable} font-mono`}
        >
          <h2 className="text-2xl">
            Welcome to the Cosmos Craze Minting Page,
          </h2>
          <p className="sm:text-center">
            dive into a universe of color, neon brilliance, and playful memes as
            you embark on a journey to claim your own piece of the cosmic
            mosaic.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <Button text="MINT MY ASTEROID" onClick={mintHandler} />
          <Link href="/collection">
            <Button text="VIEW COLLECTION" secondary />
          </Link>
        </div>

        {isModalOpen && <MintingModal hash={mintTxHash} />}
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-center gap-10 max-w-4xl min-h-48 px-10">
        <div
          className={`flex flex-col items-center gap-2 text-white font-light ${jura.variable} font-mono`}
        >
          <h2 className="text-2xl">Congratulations, cosmic explorer!</h2>
          <p className="sm:text-center	">
            Welcome to the Cosmos Craze galaxy, where your celestial treasure is
            now yours to cherish and share across the cosmos! ✨
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <Link href={`/collection/${userTokenId}`}>
            <Button text="VIEW MY ASTEROID" />
          </Link>
          <Link href="/collection">
            <Button text="VIEW COLLECTION" secondary />
          </Link>
        </div>
      </div>
    );
  }

  return content;
};

export default HomeDynamicContent;
